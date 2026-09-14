# XESTUS Home Server & Cybersecurity Lab

## 1. Executive Summary & Purpose

The **XESTUS Home Server & Hardware Lab** is an internal research, development, and cybersecurity testing environment built around energy-efficient ARM64 hardware (specifically utilizing a dedicated Samsung Galaxy F41 Linux test node alongside local development workstations).

### Core Principle: Production Independence
> [!IMPORTANT]
> The public production website ([https://xestus.in](https://xestus.in)) **never directly depends on the personal home server**.
> - **Public Edge**: 100% hosted on global edge CDN infrastructure (GitHub Pages) with 99.98% SLA uptime.
> - **Internal Lab**: Serves exclusively as an isolated sandbox for backend prototyping, database benchmarking, cybersecurity learning, and IoT telemetry research.

---

## 2. Hardware & Operating Environment

| Component | Specification | Operational Role |
| :--- | :--- | :--- |
| **Hardware Host** | Samsung Galaxy F41 (Exynos 9611 ARM64) | Headless 24/7 low-power Linux development node |
| **Operating System** | Debian / Ubuntu Linux under Termux / PRoot | Headless command-line server environment |
| **Network Mesh** | Tailscale (WireGuard-based encrypted mesh) | Secure remote administration without port forwarding |
| **Process Manager** | PM2 / Systemd | Background microservice daemon supervision |
| **Runtimes** | Node.js v20+, Python 3.12, Docker Edge | API development, scraping, and local SLM inference |

---

## 3. Active Research & Lab Tracks

### 3.1 Headless Micro-Services & Staging APIs
- **FastAPI / Node.js Mock Endpoints**: Testing asynchronous telemetry collection, CRM webhooks, and rate-limiting middleware prior to cloud deployment.
- **Local SQLite / PostgreSQL Testing**: Benchmarking query performance, migrations, and vector embedding lookups (`pgvector`).

### 3.2 Edge AI & Quantized SLMs
- **4-bit Quantization (GGUF / ONNX)**: Running quantized small language models (e.g. SmolLM, Phi-3 Mini) locally on ARM cores to evaluate tokens-per-second, battery draw, and thermal throttling behaviors.

### 3.3 Cybersecurity & Defensive Engineering
The personal lab provides a hands-on environment for mastering modern defensive security:
- **SSH Hardening**: Key-only authentication, custom ports, fail2ban brute-force mitigation.
- **Reverse Proxying**: Nginx TLS termination, header security (`CSP`, `HSTS`, `X-Content-Type-Options`), and IP throttling.
- **Network Observability**: Wireshark packet analysis, DNS sinkholing, and automated audit logging.

---

## 4. Operational Safety & Thermal Guardrails

Running continuous server workloads on mobile ARM hardware requires strict hardware safeguards:
1. **Thermal Throttling Monitor**: Automated cron scripts measuring CPU temperature every 60 seconds; tasks pause if temperature exceeds 65°C.
2. **Battery Protection**: Power bypass / capped 80% charge threshold to prevent lithium-ion degradation during continuous mains power.
3. **Graceful Reboot**: Automated daily log rotation and memory garbage collection to prevent resource leaks.
