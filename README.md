# Squiggle Backend

<div align="center">
  <img width="600" src="https://user-images.githubusercontent.com/90031266/171200353-fa696ceb-a83c-456d-824e-d03f2f027922.png" />
</div>

</br>
This is the backend repo. The plugin repo can be found [here](https://github.com/Ennnm/squiggle).

## About the Project
As our physical world grows increasingly entangled with the digital universe, the ability to create and innovate on the technological plane grows increasingly crucial. To build anything meaningful, one requires adequate skill with code. However, the time investment to achieve this level of mastery is prohibitively high, and many of us simply do not have the time or energy to dedicate ourselves to learning to code.

Not knowing how to code also means that we lack fluency with design language, so even communicating with developers can be a challenge. As some information is inadvertently lost when we describe our thoughts with words, developers and designers may not comprehend exactly what we are thinking of, and would translate our description into a product somewhat different from what we are seeing in our mind’s eye. This is a great pity. We believe everyone is a creator at heart, yet technology stands between us and the products we think up, like an insurmountable barrier to entry. 

To democratise digital creation, and allow for a creator movement that even non-designers can take part in, we return design to the realm of pen and paper. By going back to the basics and opting for a mode of interaction that everyone is already more than adept with, we eliminate the need for complex tech know-how. In essence, Squiggle works by converting sketches into design elements in Figma, you sketch things into their digital existence, completely bypassing the need for code of any kind.

## How It Works
1. We first pre-trained our Machine Learning algorithm with Tensorflow Object Recognition api using the Faster-RCNN algorithm. We chose this method to optimise image recognition performance with a trade off for speed. We believe that accuracy in image recognition is paramount for building confidence in our application and for a smooth user experience. As the wait time is only 2 to 3 seconds, it is not too disruptive, and we believe that our users will find it acceptable.

2. When we were training the Machine Learning model, we used augmentations ranging from horizontal and vertical flips, gaussian blur, zoom and crop to contrast and cutout. These augmentations increased model robustness to different variations of hand-drawn wireframes which helped us achieve Classification Loss at 0.2 and Localization Loss at 0.15, with overall average accuracy at 85%. 

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/90031266/171191293-1d985f73-0b82-4e1c-96b6-b2c557e4a968.png" />
</div>

3. We then loaded this pre-trained model into our NodeJS app.

4. Any incoming images will be fed into this model to obtain the predicted dataset which will be used to render the digital wireframe on Figma. In practice, the user begins by importing an image into the application. This image can be a photograph of your sketch or it can be a scan of it.
Anything goes so long the pen markings are clearly visible in the imported image.

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/90031266/171198217-878f8fb1-0f9f-40e2-9c86-8068f64ab694.gif" />
</div>

5. Squiggle processes it. And there we have it – a highly-fidel wireframe in Figma. With Squiggle, a user can quickly iterate by sketching out many variations of their design and so explore various possibilities thoroughly before landing on a final design. 

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/90031266/171199467-3e254394-03b5-40c4-b566-cae067dc4579.png" />
</div>

## Feasibility of Concept

1. 86% of designers already brainstorm with pencil, paper or whiteboard according to a survey in 2019 by uxtools.co. Squiggle simply leverages upon existing user behaviour. 

2. Sketching isn’t just the way of the layman designer either, even highly established, and experienced designers from companies like Nintendo and Hatena have spoken about using sketching as a part of their prototyping process in designing the Miiverse. The merits of sketching to design have long been acknowledged but until now it has been difficult for designers to incorporate it into their design process. 

3. Because the effort of having to draw twice on paper and on screen discourages rapid prototyping, and it is difficult for some to imagine what their hand-drawn designs would look like on screen. Both of these problems are neatly averted with Squiggle, because you need only draw once to see how it looks like as a sketch and as a wireframe.

## Technical Feasibility

1. Due to time constraints, we only used 53 out of the 168 wireframe images we prepared to train the current model. With a larger dataset, the model accuracy will be boosted. 

2. We could also train the mode to recognize more features such as colour and element properties like border radius or roundedness of the corners, so that the rendered figma components will more closely resemble the hand-drawing. 

3. We would have also loved to render the components exact to how they appear. For example a button output would not just be represented by a rectangular frame, but would be presented with the right shadow properties. This realism would let our non-designer users produce ready-to-go wireframes using our plugin app with minimal need for further editing on the Figma app

## Conclusion

With tools like Squiggle, what you can design is limited only by your imagination, and not by your skill with computers or coding. Everyone should be able to take part in digital creation. Join the creator movement, design with Squiggle


# Installation

1. Clone this repository
2. Navigate to this folder via your terminal and run ```npm i``` to install the NPM packages
3. Once installed, run `npm start` to run `nodemon index.js`



