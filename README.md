# 🐝 Quidhive

**Quidhive** is a smart escrow-based payment platform built for freelancers and clients.  
It enables freelancers to receive payments securely in **USDC** while protecting payers until they’re satisfied with the work.  
Built for transparency, trust, and control — without sacrificing simplicity.

🌐 **Website:** [quidhive.com](https://quidhive.com)  
💻 **Demo:** [demo.quidhive.com](https://demo.quidhive.com)  
📧 **Contact:** team@quidhive.com

---

## 📂 Repository Overview

Due to the sensitive nature of financial transactions and our integration with **Circle’s API** (for crypto wallet and payment processing), we’ve structured our codebase into **four repositories**, separating public and private components.

| Repository | Visibility | Description |
|-------------|-------------|--------------|
| **Waitlist** | Public | Collects early sign-ups and interest before launch. |
| **Landing Page** | Public | Main marketing site showcasing product features and updates. |
| **Main Frontend** | Private | Core user interface for freelancers and payers. |
| **Main Backend** | Private | Handles payment logic, Circle wallet integrations, security, and escrow flow. |

---

## 🔒 Why Some Repositories Are Private

Quidhive manages **real financial transactions**, including:
- **Escrow-based crypto payments**
- **Client–freelancer release management**
- **Secure Circle API interactions (keys, encryption, and wallet operations)**

To protect our users and comply with security best practices, our **main backend** and **main frontend** repositories remain **private**.  
They contain sensitive business logic, encryption layers, and secure API integrations that cannot be publicly exposed.

Our **public repos** (Waitlist & Landing Page) give the community a view of our brand and non-sensitive systems without compromising data integrity or user security.

---

## ⚙️ Tech Stack Overview

### 🟢 **Waitlist**
- **Framework:** Node.js (Fastify)
- **Reason:** Lightweight and optimized for speed, ideal for handling large volumes of sign-ups and email verifications efficiently.

### ⚪ **Landing Page**
- **Framework:** Next.js
- **Reason:** Great for SEO, fast static rendering, and excellent developer experience — helps us showcase Quidhive’s brand effectively.

### 🟣 **Main Frontend**
- **Framework:** Next.js
- **Reason:** Smooth integration with APIs, optimized performance, and strong SSR support for a fast, secure user experience.

### 🟡 **Main Backend**
- **Language:** Go (Golang)  
- **Framework:** GoFiber  
- **Reason:** Go is fast, secure, and scalable — perfect for handling concurrent financial operations with reliability and precision.

---

## 🚀 Our Vision

We’re building **trust for the future of freelance payments** — where payers stay protected, freelancers stay paid, and every transaction is powered by transparency and crypto-backed efficiency.

---

## 💡 Why We’re Joining Base Batches (Incubase)

We’re joining **Base Batches (Incubase)** to scale Quidhive into the ecosystem that aligns most with our mission — bringing **trust and transparency to the global freelance economy** through onchain payments.

By joining **Incubase**, we aim to:
- Collaborate directly with **Base mentors and builders** who understand the challenges of bringing users onchain.
- Strengthen our **go-to-market strategy** and **technical scalability** with guidance from experts in the Base ecosystem.
- Validate our **onchain escrow model** using Base USDC, proving that freelancers and clients can transact securely, globally, and transparently.

For us, Base Batches isn’t just an accelerator — it’s a community where we can refine Quidhive, grow sustainably, and contribute to the future of **onchain trust**.

---

## 🤝 How to Contribute

We welcome contributions to our **public repositories**.

1. **Fork** the repository  
2. **Create a new branch** for your feature or bug fix  
3. **Commit** your changes  
4. **Open a Pull Request** with a clear description of your changes  

For security reasons, contributions are only open for **Waitlist** and **Landing Page** repos.

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute with attribution.

---

Made with 💛 by the **Quidhive Team**

