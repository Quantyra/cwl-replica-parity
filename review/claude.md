# Referee report: "A parity obstruction for rooted Fock-state weights in correlated worldline optomechanics"

**Sources:** I did not read [1]–[5] or the repository script. Statements about what the cited papers contain come from the authors' orientation and the manuscript, and I have not verified them. I re-derived the manuscript's own algebra by hand.

## Verdict

**Minor revision.** The main theorem holds. In the lossless, linearized, exactly returning model, the all-integer limit of |K_v,N|^(2/N) does not exist for small fixed h > 0. None of the problems below invalidates it. Several claims about scope, the comparison with [2], and what the readout means need tightening.

## What I checked

- **Pulse:** With f± = √(1 ± d) = √(242/221) and √(200/221), the products T·f± equal 22π and 20π. The cross terms in ∫q_m² vanish because T(f₊ ± f₋) is a multiple of 2π. The expression for G is correct.
- **Coefficients:** Using S = f₊⁻² + f₋⁻² = 2/(1 − d²), I get A = D = −iαh and B = −iβh. Both match the manuscript.
- **Vacuum amplitude:** The multilinear coefficient (2m)!/m!·(A/4m)^m, the Stirling step and the limit |A|/e are all correct. The printed value 0.05535 h reproduces.
- **Occupied endpoint:** The generating function follows from n!/(j!²(n−2j)!) = C(n,2j)·C(2j,j), and the asymptotic form of m_n is standard. Both λ± moduli are correct, and 0.40681 h² reproduces.
- **Parity:** Any centered Gaussian multiplet state has even total excitation number, so odd N gives exactly zero. The SN claim also holds, because ⟨q_m⟩ = 0 in a joint-parity eigenstate.

## How preparation and final states line up

- **2024 single sector:** The input is the correlated Gaussian ground state (Eqs. 76–77) plus one photon per line, selected by derivatives. The final state is a replica-symmetric Fock label with the same root taken for each endpoint. The manuscript treats this consistently.
- **2022 product over sectors:** The manuscript says the inputs there are per-line overlaps. Its N = 1 factor vanishes by ordinary parity, whatever the mechanical widths. Sec. 4 then evaluates the product "on the identical sequence K_v,N" from Sec. 3, which has the 2024 preparation. That mixes the two constructions. Only the N = 1 zero is actually needed, so that sentence should be removed.

## Overstated or under-specified claims, with repairs

1. **Exact return is presented as essential, but it isn't.** With per-line pair coefficient a, the kernel is exp(aΣx_i²/2 + (A − a)X²/2). Only the cross terms contribute to the multilinear coefficient, so the even-sector amplitude depends on A − a. That difference is O(h) whatever the timing. *Repair:* say this explicitly. It makes the obstruction robust to the "reference at the required precision" assumption. Exact return is only needed for the clean closed forms of w_d and w_b.
2. **The obstruction is broader than the vacuum.** Take any replica-symmetric endpoint whose total excitation n_a + n_m is even, such as (2,0), (1,1) or (0,2). Its weight vanishes at every odd N for the same parity reason. *Repair:* state the theorem for the whole even-total class. Note also that normalizing over infinitely many endpoints needs a summability argument.
3. **The obvious fixes are not addressed.** A defender could take only even N, or use the limsup. With the limsup, the parity-forbidden vacuum gets weight ≈ 0.055h. That is much larger than the allowed transfer ratio of ≈ 0.41h². *Repair:* add this. It answers the natural objection and strengthens the conclusion.
4. **The mechanical readout basis is ambiguous.** "Adds no term" holds only if the input and output mechanical bases share one frequency scale. If the detector counts Ω-quanta while the collective mode is prepared at width ω, D picks up a real O(h) squeezing term. That moves λ₊ and changes the 0.4068 coefficient. The vacuum result does not change, because only C is affected. *Repair:* define the measured phonon basis, and give w_d for both bases or justify one.
5. **What the readout can mean physically.**
   - **Photon input:** The "photon" is an excitation on top of a strong drive, so a counter must work after displacing that drive away.
   - **Loss:** A lossless cavity cannot be loaded with a photon or read out. Once loss is included, it dominates the dark (0,0) record, and the parity bookkeeping has to cover the environment's replicas.
   - **Coupling and switching:** g/Ω ≈ 0.048 is an ultrastrong coupling, and instantaneous rectangular switching is unphysical.
   - **Size:** For realistic h (≲ 10⁻¹⁰), the ratio of order h² cannot be measured.

   *Repair:* call the result a definitional inconsistency in the prescription, not a proposed test. Sec. 6 should say outright that no experiment can see it.
6. **Citations need checking.** The equation numbers for [1] and [2], and the description of Diósi's critique [3], should be checked against the published versions. In particular, confirm that [1] takes the root separately for each endpoint, not over a product of sectors.

## Bottom line

The algebra, the parity argument and the order of limits are sound. The central result stands: in the stated model, rooting each endpoint over all integers leaves the vacuum weight undefined. Repairs 1–3 make the paper stronger. Repairs 4–6 fix overstatement and ambiguity rather than errors in the theorem.
