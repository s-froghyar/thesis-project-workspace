import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'augerino',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <div class="col">
        <h2>Augerino</h2>
        <p>
          Augerino is a framework for neural networks developed by Benton et al.
          to learn invariances and equivariances from training data alone. This
          approach uses a parameterised distribution of transformations to
          generate multiple augmented samples of the base input data. The
          network’s outputs for each of the samples are then averaged to produce
          the final prediction. Augerino manages to learn invariance during
          training time, by not only learning the network parameters, but the
          distribution’s parameters as well. The idea is that invariance can be
          learned using augerino in general and not limited to spatial
          transformations, as long as the transform is differentiable.
        </p>
        <h2>Formal definition</h2>
        <p>
          The augerino framework uses a predefined, untrained model and produces
          an invariant model during training time. Formally, given a network fw,
          with parameters w, a new model f-hat can be made that is invariant to
          a set of transformations S, by averaging the predictions over a
          parameterised distribution &mu;&theta;(.) of the transformation g
          &isin; S:
          <img
            src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/aug_fd.svg"
            alt="augerino formal definition"
          />
          This model is going to be referred to as Augmentation-Averaged Model
          (AAM).
        </p>
      </div>
      <div class="col">
        <h2>Implementation</h2>
        <p>
          When creating an AAM, two elements are needed: the network itself and
          the differential augmentation modules. AAM abstracts the network’s
          forward pass to include the augmentation right before it is passed to
          it. The reason this is needed is that the parent model contains the
          augmentation’s limits as trainable parameters and thus during the ADAM
          optimiser’s step they are learned along with the network’s weights.
          <br /><br />
          Augerino also implements a regualarisation penalty in order to bias
          the training to solutions that incorporate invariance. This
          regularisation function R is defined as the softplus activated
          parameters’ vector norm and scaled with &lambda; as per the author’s
          implementation. Benton et al. found that the factor of regularisation
          is largely unimportant as it kept consistent performance at every
          level, therefore it was set to 0.01 through all the experiments.
        </p>
      </div>
    </div>
    <div class="framework">
      <img
        src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/augerino_framework.png"
        alt="aug framework"
      />
    </div>
  `,
  styleUrls: ['augerino.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AugerinoComponent {}
