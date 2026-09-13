# XESTUS Future Backend & Infrastructure Specification

**Document Version**: 1.0.0  
**Phase**: Planned Architecture (Phases 15–22)

---

## 1. System Vision

The future XESTUS platform will evolve from a static marketing presence into a comprehensive business automation, AI service, and client management platform.

```
                      +----------------------------------+
                      |         Public Frontend          |
                      |         https://xestus.in        |
                      +-----------------+----------------+
                                        |
                                        v HTTPS / WSS
                      +-----------------+----------------+
                      |        Reverse Proxy / CDN       |
                      |       Nginx + SSL Termination    |
                      +-----------------+----------------+
                                        |
                                        v
                      +-----------------+----------------+
                      |       XESTUS API (FastAPI)       |
                      |     - Auth / JWT Token Service   |
                      |     - Inquiry & Lead Ingestion   |
                      |     - AI Agents & RAG Pipelines  |
                      |     - Client Dashboard Services  |
                      +--------+----------------+--------+
                               |                |
             +-----------------+                +----------------+
             v                                                   v
+------------+-------------+                       +-------------+------------+
|     PostgreSQL DB        |                       |       Redis Cache        |
|  - Users & Clients       |                       |  - Rate Limiting         |
|  - Inquiries & Audits    |                       |  - Session Store         |
|  - Agent Logs            |                       |  - Async Job Queues      |
+--------------------------+                       +--------------------------+
```

---

## 2. Component Specifications

### 2.1 Backend Framework
- **FastAPI (Python 3.11+)**: Chosen for high throughput, asynchronous I/O, native Pydantic validation, and direct compatibility with modern AI/LLM SDKs (OpenAI, Gemini, LangChain, MCP).

### 2.2 Database Layer
- **PostgreSQL 16**: Relational storage with JSONB support for unstructured AI agent logs and inquiry payloads.
- **SQLAlchemy 2.0 / Alembic**: Asynchronous ORM and schema migration engine.

### 2.3 Galaxy F41 Home Lab Server Role
- **Purpose**: Local experimentation, home lab server learning, staging API host, and IoT agent testing.
- **Environment**: Linux environment (via Termux/chroot or containerized distribution) running Docker, Nginx reverse proxy, and local testing endpoints.
- **Production Guardrail**: The live production domain `https://xestus.in` will NEVER rely on the Galaxy F41 phone server for uptime-critical public services until proven in staging.

---

## 3. Frontend Integration Adapter

The contact form in `script.js` is structured using an adapter pattern:

```javascript
class XestusClient {
    static async submitInquiry(payload) {
        if (CONFIG.USE_BACKEND_API) {
            // Future FastAPI endpoint
            return fetch(`${CONFIG.API_URL}/v1/inquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
        } else {
            // Existing EmailJS cloud fallback
            return emailjs.send(CONFIG.EMAILJS_SERVICE, CONFIG.EMAILJS_TEMPLATE, payload);
        }
    }
}
```
