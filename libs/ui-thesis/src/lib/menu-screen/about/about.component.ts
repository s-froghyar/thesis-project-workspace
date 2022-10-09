import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome">
      <h1>Welcome!</h1>
      <p>
        Welcome to the interactive demo of my
        <a
          href="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/mgr_thesis.pdf"
          target="_blank"
        >
          Master's thesis
        </a>
        titled "Robust Deep Learning for Music Genre Recognition using
        Augmentation Techniques".
        <br />
        You can select a sample from the GTZAN Dataset and the model
        configuration to see the output of the network layers in a single patch
        as well as the overall prediction the model makes using the Sum rule of
        the baseline model.
      </p>
    </div>
    <hr />
    <div class="abstract">
      <h2>Absract</h2>
      <p>
        "Recording devices are vulnerable to audio perturbations such as
        background noise, limiting a Music Genre Recognition system’s ability to
        be accurate in real world scenarios. Convolutional Neural networks,
        although showing great performances in the field of image recognition,
        adversarial attacks can strongly influence the accuracy of the model.
        Being invariant to such conditions allows these systems to overcome this
        hurdle. Previous literature addressed these issues using data
        augmentation with varying levels of success, however this increases the
        size of the dataset causing the training time to multiply. In this
        paper, two data augmentation techniques are explored to build robust
        deep learning architectures while maintaining the training set’s size.
        Tangent propagation is a regularisation technique to encourage local
        invariance to the input, whereas Augerino is a framework for neural
        networks to learn the dataset’s invariance at training time. These
        techniques were applied using visual representation of the music pieces
        and suitable transformations were chosen to be invariant to, namely:
        pitch shifting and Gaussian noise injection. The experiments were
        conducted using the GTZAN dataset and the best overall model has
        outperformed all the baseline models in terms of accuracy as well as
        robustness."
      </p>
    </div>
  `,
  styleUrls: ['about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
