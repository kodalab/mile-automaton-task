# Mile Club - Mobile Automation Framework

This repository contains the end-to-end (E2E) automation suite for the Mile Club iOS application, built using **Detox** and **Jest**. The framework follows the **Page Object Model (POM)** design pattern to ensure maximum maintainability and scalability as the application grows.

## ⚠️ Tactical Pivot Note
Due to current limitations in the production-style build where `testID` attributes are being optimized/stripped or not present, the framework currently utilizes **Text**, **Label**, and **Value-based matchers** to ensure the "Happy Path" remains automated. 

All planned Page Objects and Selectors remain in the codebase to provide a clear blueprint for full coverage once persistent identifiers are exposed in future builds.

---

## 🚀 Quick Start

### 1. Prerequisites
* **Node.js**: v20 or higher
* **Xcode**: (with Command Line Tools)
* **detox-cli**: `npm install -g detox-cli`
* **Applesimutils**: `brew tap wix/brew && brew install applesimutils`

### 2. Installation
```bash
npm install
```
3. Environment Setup
Create a .env file in the root directory:

```
TEST_USER=your_email@example.com
TEST_PASS=your_password
```

## 🛠 Running Tests
1. Place the Binary
The framework is configured to look for the application in the bin/ directory. Ensure the simulator-compatible build (Mile.app) is present there.

2. Execute Suite
Run the suite using the release configuration (optimized for pre-built binaries):

Bash
```
npx detox test

OR 

detox test -c ios.sim.release
```
## 🏗 Framework Architecture
e2e/model/screens: Page Objects defining screen-specific logic.

e2e/model/selectors: Centralized UI mapping. Designed for "Update Once, Fix Everywhere" maintenance.

e2e/model/common: Includes the BaseScreen class for global helpers like System Alert handling, Synchronization management, and Splash Screen waits.

e2e/tests: High-level test scripts written in a declarative, stakeholder-friendly style.


## 📊 Reporting & CI/CD
Console Reporting: Currently utilizing the default Jest/Detox reporter for high-reliability log streaming in CI/CD environments.

CI/CD Pipeline (Proof of Concept)
A GitHub Actions workflow is included (.github/workflows/e2e-nightly.yml) to demonstrate the framework's readiness for automated regression.

Note: The current workflow is configured to expect a pre-built binary artifact. For full automation, a centralized storage solution (like AWS S3 or a private Artifactory) would be integrated to host the .app builds.

Future Enhancement: Integration of jest-html-reporters with AWS S3 hosting and Slack Webhook notifications for real-time visibility into regression status.