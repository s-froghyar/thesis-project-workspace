import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Tangent Propagation</h2>
    <p>
      Tangent Propagation is a regularisation technique introduced by Simard et
      al. in 1992, which encourages local invariance to transformations to the
      input vector xn. The idea is that the model is penalised for changes to
      its output when the input is transformed. So in the case of audio, a
      transformation could be reverbation, Gaussian noise added to the signal or
      the pitch shifted to name a few. The technique’s aim is to make the model
      robust and accordingly should not change its prediction due to
      perturbations.
    </p>
    <div class="content">
      <div class="col">
        <h2>The tangent vector</h2>
        <p>
          Firstly, the transformation is defined by s(x, &xi;) where &xi; is the
          governing parameter such that s(x, 0) = x. Given that the
          transformation is continuous, a manifold M is swept out by the input
          vector’s transformed pattern. Given that the transformation is
          continuous, a manifold Mis swept out by the input vector’s transformed
          pattern. In the case of multiple transforms, the dimension of this
          subspace is given by the number of transformations applied and allows
          &xi; to hold multiple parameters.
          <img
            src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/tau_eq.svg"
            alt=""
          />
          where xi is the transformed input vector in dimension i.
        </p>
      </div>
      <div
        class="tau"
        matTooltip="Tangent vector visualised"
        matTooltipPosition="above"
      >
        <img
          src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/tau.jpg"
          alt="tau"
        />
      </div>
      <div class="col">
        <h2>The regularisation term</h2>
        <p>
          Applying a transformation to the input will in general change the
          network’s output. The derivative of the model’s output yk with respect
          to the parameter &xi; can be obtained using the chain rule:
          <img
            src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/tp_chain.svg"
            alt="tp_chain"
          />
          where k is the index of the output for a multi-class model and Jki is
          the (k,i) element of the Jacobian matrix. The aim is to encourage the
          network to be locally invariant in the vicinity of the data points. In
          order to achievethat, the result of equation (4) can be used as a
          regularisation term in addition to the original error function. The
          summation of 4 over all outputs, k, and samples in training batch n
          will give the regularisation function &Omega; and is defined by:
          <img
            src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/tp_term.svg"
            alt="tp term"
          />
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./tp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TpComponent {}
