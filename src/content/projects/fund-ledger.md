---
title: Fund Ledger
summary: Double-entry accounting for private equity funds, where the database refuses unbalanced books and a retried request moves money exactly once.
description: Double-entry accounting for private equity funds in Django REST Framework and PostgreSQL 16. Capital calls, distributions, reversals, FX, fees, valuations, period close and LP statements, built so that money moves exactly once.
year: '2026'
stack: [Python 3.12, Django REST Framework, PostgreSQL 16, Hypothesis, Locust, Docker]
featured: true
order: 1
demo: transaction-log
links:
  github: https://github.com/IbraCoded/fund-ledger
  # demo: https://ledger.yourdomain.com
highlightsAreSteps: true
highlights:
  - title: Lock in a fixed order
    body: Rows are locked in primary-key order, so two transfers touching the same accounts queue instead of deadlocking.
  - title: Recognise a retry
    body: An idempotency key with savepoint recovery means a request sent twice moves money exactly once.
  - title: Post, never edit
    body: Triggers make entries append-only and refuse postings into a closed period. Corrections are reversals.
  - title: Prove it balances
    body: A deferred constraint trigger checks the transfer at commit, even if application code is wrong.
evidence:
  - title: Load tested
    body: 'Locust at 50 concurrent users: 6,751 requests with no failures, and the ledger reconciled to zero afterwards. I traced the throughput ceiling to a per-fund row lock and wrote up the mitigations.'
  - title: Tested like it matters
    body: More than 100 tests, including Hypothesis property tests and multi-connection concurrency tests. CI runs ruff, mypy and pytest with an 85% branch coverage gate, then seeds the ledger twice and reconciles.
---
