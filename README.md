# A parity obstruction to extending single-sector Fock weights in correlated worldline optomechanics

Daniel Fredriksen · Quantyra Inc. · [ORCID](https://orcid.org/0009-0002-9123-7435)

[Read the manuscript (PDF)](manuscript.pdf) · [Editable Typst source](manuscript.typ) · [Three-lens review and disposition](review/disposition.md) · [Verification script](verify.js) · [Lean certification plan](lean-certification-plan.md)

For a shared pulse with an exact centered Schrödinger–Newton return, the CWL joint-vacuum endpoint has zero rooted weight for odd replica counts and a strictly positive subsequential limit for even counts. The distinction concerns the extension of a specific optical probability prescription to the full quadratic model. The normalized physical detection rate remains open.

Cite version 1.0.0 of this standalone preprint using [10.5281/zenodo.24332848](https://doi.org/10.5281/zenodo.24332848). The [GitHub release](https://github.com/Quantyra/cwl-replica-parity/releases/tag/v1.0.0) includes the manuscript PDF. The earlier [common-drive Comment](https://doi.org/10.5281/zenodo.24326219) concerns a different pulse and approximation.

## Reproduce the manuscript and arithmetic

With Typst 0.15.1 and Node.js (verified with v26.12.1), run the following commands from this directory.

```sh
typst compile manuscript.typ manuscript.pdf
node verify.js
```

The script checks the exact cycle counts, first derivatives of the symplectic propagator and finite Gaussian contractions at one through five replicas. The asymptotic proof is in the manuscript. The script has no external packages. The [2024 optical prescription](https://doi.org/10.1103/PhysRevD.109.064078) and [2022 state propagator](https://doi.org/10.1103/PhysRevD.105.084015) are the primary comparison sources.

The manuscript and accompanying materials use [CC BY 4.0](LICENSE).
