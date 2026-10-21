/**
 * XESTUS | Universal Social Sharing & Viral Growth Engine
 * Enables 1-click sharing to WhatsApp, Telegram, LinkedIn, X, and Web Share API
 */
(function() {
    function showToast(msg) {
        let toast = document.getElementById('xestus-share-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'xestus-share-toast';
            toast.className = 'toast-notice';
            document.body.appendChild(toast);
        }
        toast.innerHTML = '<i data-lucide="check-circle-2"></i> <span>' + (msg || 'Link copied to clipboard!') + '</span>';
        if (window.lucide) lucide.createIcons();
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

    function shareContent(network, customUrl, customTitle) {
        const url = encodeURIComponent(customUrl || window.location.href);
        const title = encodeURIComponent(customTitle || document.title);
        const text = encodeURIComponent("Check out this valuable resource on XESTUS: " + (customTitle || document.title));

        switch (network) {
            case 'whatsapp':
                window.open('https://api.whatsapp.com/send?text=' + text + '%20' + url, '_blank', 'noopener,noreferrer');
                break;
            case 'telegram':
                window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank', 'noopener,noreferrer');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, '_blank', 'noopener,noreferrer');
                break;
            case 'x':
                window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url, '_blank', 'noopener,noreferrer');
                break;
            case 'copy':
                navigator.clipboard.writeText(customUrl || window.location.href).then(() => {
                    showToast('Link copied to clipboard!');
                }).catch(() => {
                    const temp = document.createElement('input');
                    temp.value = customUrl || window.location.href;
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                    showToast('Link copied to clipboard!');
                });
                break;
            case 'native':
                if (navigator.share) {
                    navigator.share({
                        title: customTitle || document.title,
                        text: "Check out this valuable resource on XESTUS",
                        url: customUrl || window.location.href
                    }).catch(() => {});
                } else {
                    shareContent('copy', customUrl, customTitle);
                }
                break;
        }
    }

    window.XestusShare = {
        share: shareContent,
        toast: showToast
    };

    document.addEventListener('click', function(e) {
        const btn = e.target.closest('[data-share]');
        if (btn) {
            e.preventDefault();
            const network = btn.getAttribute('data-share');
            const targetUrl = btn.getAttribute('data-url') || window.location.href;
            const targetTitle = btn.getAttribute('data-title') || document.title;
            shareContent(network, targetUrl, targetTitle);
        }
    });
})();
