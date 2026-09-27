/**
 * XESTUS TOOLS — Client-Side Fast Search & Category Filtering
 * Scoped Script: js/xestus-tools.js
 * Version: 1.0.0
 */

(function () {
    'use strict';

    function initXestusTools() {
        var searchInput = document.getElementById('xestusToolsSearch');
        var clearBtn = document.getElementById('xestusToolsClearSearch');
        var countBadge = document.getElementById('xestusToolsResultCount');
        var tabBtns = document.querySelectorAll('.xestus-tools-tab-btn');
        var categoryGroups = document.querySelectorAll('.xestus-tools-category-group');
        var toolCards = document.querySelectorAll('.xestus-tools-card');
        var emptyState = document.getElementById('xestusToolsEmpty');

        if (!toolCards.length) return;

        var activeFilter = 'all';

        function filterTools() {
            var query = (searchInput ? searchInput.value : '').toLowerCase().trim();
            var totalVisible = 0;

            if (clearBtn) {
                clearBtn.style.display = query ? 'flex' : 'none';
            }

            categoryGroups.forEach(function (group) {
                var groupCategory = group.getAttribute('data-category');
                var cardsInGroup = group.querySelectorAll('.xestus-tools-card');
                var visibleInGroup = 0;

                var categoryMatches = (activeFilter === 'all' || activeFilter === groupCategory);

                if (!categoryMatches) {
                    group.classList.add('is-hidden');
                    cardsInGroup.forEach(function (card) {
                        card.classList.add('is-hidden');
                    });
                    return;
                }

                cardsInGroup.forEach(function (card) {
                    var name = (card.getAttribute('data-name') || '').toLowerCase();
                    var desc = (card.getAttribute('data-desc') || '').toLowerCase();
                    var tags = (card.getAttribute('data-tags') || '').toLowerCase();

                    var matchesQuery = !query || name.indexOf(query) !== -1 || desc.indexOf(query) !== -1 || tags.indexOf(query) !== -1;

                    if (matchesQuery) {
                        card.classList.remove('is-hidden');
                        visibleInGroup++;
                        totalVisible++;
                    } else {
                        card.classList.add('is-hidden');
                    }
                });

                if (visibleInGroup > 0) {
                    group.classList.remove('is-hidden');
                } else {
                    group.classList.add('is-hidden');
                }
            });

            if (countBadge) {
                countBadge.textContent = totalVisible + ' tool' + (totalVisible === 1 ? '' : 's');
            }

            if (emptyState) {
                emptyState.style.display = totalVisible === 0 ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', filterTools);
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                if (searchInput) {
                    searchInput.value = '';
                    searchInput.focus();
                }
                filterTools();
            });
        }

        tabBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                tabBtns.forEach(function (b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                activeFilter = btn.getAttribute('data-filter') || 'all';
                filterTools();
            });
        });

        // Initial count
        filterTools();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initXestusTools);
    } else {
        initXestusTools();
    }
})();
