# Referee report

Manuscript `3116609a32a5f786ae9d188df76ff054620a6b19`. I did not independently access any primary source. Every identity below was re-derived from the manuscript’s definitions alone. **Verdict: the obstruction stands. No error invalidates the theorem.** One majorant in the bright estimate needs a polynomial factor; the limit is unchanged.

## Parity and the vacuum factorial

With \(X=N^{-1/2}\sum_i x_i\) the vacuum kernel is \(C\exp(A X^2/2)\). The exponent depends on \((\sum x_i)^2\), so the joint Taylor series is even. Equivalently, \(V_h\) and \(V_0\) are quadratic and preserve total excitation parity \((-1)^N\). One input photon on each line has that parity, and the joint vacuum is even, so
\[
K_{v,2m+1}=0
\]
exactly, at every fixed \(h\), with counter-rotating terms retained. For \(N=2m\), \(c=A/(2N)=A/(4m)\) and the degree-\(2m\) term of \(\exp(c S^2)\) contributes \(c^m(2m)!/m!\) times the square-free coefficient \((2m)!\) of \(S^{2m}\). The mixed partial of that monomial equals the ordinary coefficient, hence
\[
K_{v,2m}=C\frac{(2m)!}{m!}\Bigl(\frac{A}{4m}\Bigr)^m.
\]
The \(N=2\) check is \(\partial_{x_1}\partial_{x_2}C\exp(A(x_1+x_2)^2/4)=CA/2\).

## Stirling limit and the linear coefficient

Stirling gives \((2m)!/m!\sim\sqrt{2}(4m/e)^m\), so
\[
|K_{v,2m}|\sim|C|\sqrt{2}\,(|A|/e)^m.
\]
Then \(|K|^{2/N}=|K|^{1/m}\to|A|/e\), because \(|C|^{1/m}(\sqrt{2})^{1/m}\to 1\). Odd terms stay \(0\). The integer limit exists only when \(A=0\).

The return \(Tf_+=22\pi\), \(Tf_-=20\pi\) is exact at \(d=21/221\). Along that orbit
\[
G=\int_0^T q_m^2\,ds=\frac{T}{4}\sum_{\sigma=\pm}(q_\sigma^2+f_\sigma^{-2}p_\sigma^2),
\]
cross cycles integrating to zero. With \(\delta H=-h q_m^2\) the first variation is \(I+ihG\). The optical block of the quadratic form is \(q_a^2+p_a^2/(1-d^2)\). Its holomorphic \(\alpha^2\) coefficient produces
\[
A=-i\alpha h+O(h^2),\qquad\alpha=\frac{T d^2}{4(1-d^2)}=\frac{d\cdot T d}{4(1-d^2)}.
\]
Conjugating by the \(h\)-dependent mechanical squeeze adds nothing at linear order: at \(h=0\) the unperturbed propagator is a phase times the identity and commutes through \(C'(0)\). Thus the even subsequence tends to
\[
\frac{|A|}{e}=\frac{\alpha}{e}\,h+O(h^2)=0.0553477234\,h+O(h^2).
\]
The constant is \(T d^2/(4e(1-d^2))\) and matches the printed digits. For every sufficiently small fixed \(h>0\) one has \(\alpha h>0\), so the two subsequence limits differ. The \(h\to 0\) expansion must come after the \(N\to\infty\) limit.

## Dark and bright roots

Dark labels are one mechanical derivative on every line. Relatives at exact identity contribute the constant \(1\), so only the collective Gaussian remains. With \(m_n=n![x^ny^n]\exp((Ax^2+2Bxy+Dy^2)/2)\),
\[
K_{d,N}=C\kappa^N\frac{N!}{N^N}m_N,\qquad\sum_n m_n z^n=((1-Bz)^2-ADz^2)^{-1/2}.
\]
The roots are \(\lambda,\mu=B\pm\sqrt{AD}\). The binomial convolution \(m_n=\lambda^n\sum_j b_{n-j}b_j(\mu/\lambda)^j\), \(b_j=\binom{2j}{j}/4^j\), and \(b_{n-j}/b_n\to 1\) at fixed \(j\), give
\[
m_n\sim\lambda^n(1-\mu/\lambda)^{-1/2}/\sqrt{\pi n}
\]
whenever \(|\mu|<|\lambda|\). Stirling \(N!/N^N\sim\sqrt{2\pi N}\,e^{-N}\) cancels \(\sqrt{\pi N}\) up to \(\sqrt{2}\), and \((\sqrt{2}\,|1-\mu/\lambda|^{-1/2})^{2/N}\to 1\), so
\[
w_d=\kappa^2|\lambda|^2/e^2.
\]
Here \(B=-i\beta h+O(h^2)\), \(D=-i\alpha h+O(h^2)\), \(\beta=Td/(4(1-d^2))\), and \(|\lambda|=(\alpha+\beta)h+O(h^2)\). The sum collapses by \(1-d^2=(1-d)(1+d)\):
\[
\alpha+\beta=\frac{Td}{4(1-d)}.
\]
With \(\kappa^2=1-h+O(h^2)\),
\[
\frac{w_d}{w_b}=\Bigl(\frac{Td}{4e(1-d)}\Bigr)^2 h^2+O(h^3)=0.4068100435\,h^2+O(h^3).
\]
The printed square is the correct rounding of \(0.40681004348\ldots\).

For the bright endpoint the relative identity supplies \(\exp(\sum_i x_i y_i)\) and shifts the collective cross coefficient from \(B_o\) to \(B'=B_o-1=O(h)\). The resulting contraction
\[
K_{b,N}/C=\sum_{k=0}^N\frac{(N)_k}{N^k}m_k(A,B',D_o)
\]
matches direct Gaussian pairing at \(N=1\) and \(N=2\).

**Correction.** The manuscript bounds \(|m_k|\) by \(R^k\) with \(R=|B'|+\sqrt{|AD_o|}\). The binomial majorant is \(|m_k|\le(k+1)R^k\). For small \(h\), \(R<1\) and \(\sum(k+1)R^k<\infty\), so dominated convergence still yields
\[
\lim_N K_{b,N}=C\bigl((1-B')^2-AD_o\bigr)^{-1/2},
\]
finite and nonzero. Therefore \(w_b=1\). The extra \(k+1\) does not change the root.

## Product over towers

On this same sequence every odd factor vanishes, so a cutoff product that includes any odd sector (in particular sector \(1\)) is zero, and a positive power remains zero. Sector \(1\) is ordinary parity: one photon plus an even centered Gaussian against the joint vacuum, under a quadratic Hamiltonian. That comparison uses the Sec. 3 amplitudes directly and needs no reordering of products, derivatives, or logarithms. It assumes a nonzero finite normalization that does not carry the same odd-sector zero; a prescription that cancels that zero before the product is a different order of limits, which the manuscript already sets aside. The single-sector roots and the cutoff product are different operations: the former has two subsequence limits \(0\) and \(|A|/e>0\), while the latter vanishes.

An endpoint-independent rescaling that keeps a nonzero bright limit leaves the even and odd vacuum limits distinct. The fixed-\(h\) obstruction to a single vacuum weight therefore stands.
