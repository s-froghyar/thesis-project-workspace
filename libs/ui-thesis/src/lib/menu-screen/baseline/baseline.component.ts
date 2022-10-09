import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'baseline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <div class="col">
        <h2>The baseline model</h2>
        <p>
          The baseline network for the system was the one by <a>Aguiar, Costa and Silla</a>.
          Their Music Genre Recogniser system used a Convolutional Neural Network (CNN) with a particular patched
          segmentation on the audio signal's melspectrogram. Few adjustments were made to this network in order to
          adhere to our spectrogram dimensions.
        </p>
        <h2>The network</h2>
        <p>
          The patched spectrogram is passed through the first
          convolutional layer to produce 64 feature maps which are
          then downsampled by a maxpooling layer with a stride of
          2 in both axes. The resulting 64x38 feature maps then go
          through another combination of convolutional and maxpooling
          layers to produce 64 feature maps of 64x18 size. The
          final 2 layers are fully connected with the first one having
          500 neurons and the last layer being the 10 output logits for
          each class.
          The weights of the network were initialised using the <a href="https://towardsdatascience.com/weight-initialization-in-neural-networks-a-journey-from-the-basics-to-kaiming-954fb9b47c79">Kaiming method</a>
          and a bias of 0.01 to the layers was added to achieve better performance.
        </p>
      </div>
      <div class="col">
        <h2>Activation and Regularisation</h2>
        <p>
          Rectified Linear Units (ReLU) were used as an activation
          function throughout the network except the output layer,
          where no activation was used, due to the common design
          pattern for multi-class classifiers in PyTorch. This is due
          to the fact that the model uses Cross Entropy Loss as the
          loss function and its implementation in PyTorch applies log-softmax
          internally to give a better numerical representation
          than standard Softmax probabilities would in non-binary
          classification tasks.<br/><br/>
          The optimiser is the Adaptive Moment Estimation algorithm (ADAM) using
          decoupled weight decay.
        </p>
        <h2>The final prediction</h2>
        <p class="sum-rule">
          As the model is predicting only a fraction of the whole
          music signal at each pass, the Sum rule was shown to be
          the best performing combination strategy from Aguiar et al.<br/>
          <img src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/equation.svg" alt="sum rule">
          <br/>where P(wk|yi(x)) is the probability for sample x to belong
          to the class k based on the i-th patch and c is the number
          of classes.
        </p>
      </div>
    </div>
    <div class="full-net">
      <img src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/full_network.svg" alt="">
    </div>
  `,
  styleUrls: ['baseline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaselineComponent {}
