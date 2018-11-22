## Folder Structure

- **lib**
  - **components**
    - atoms
    - molecules
    - organisms
    - templates
  - **core**

Our app structure follows `atomic` design principles. More can be read [here](http://bradfrost.com/blog/post/atomic-web-design/)

**lib**

- **components**: All components will reside here in a structured manner. For further breakdown of component hierarchy please see [here](#react-component-library)

We follow atomic design of components and they are structured in this fashion.

- **Components**: All our components will reside here. The folder will be divided into Atoms, Molecules, Organisms and Templates.
  - **Atoms**: <br>
    Atoms are the basic building blocks of matter applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.
    Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations. Atoms should be developed in such a way that they can be used in any projects
    e.g. Button, Input, Modal etc and it should be dumb component.
  - **Molecules**: <br> Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.
    For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.
    Building up to molecules from atoms encourages a “do one thing and do it well” mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.
    In code setup e.g. are Editor, Filtergrid, Flyout menu, navigation-bar etc.
  - **Organisms**: <br> Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. In code setup e.g. Footer which have their own components PromotionText, NavigationBar, FlyoutMenu
  - **Templates**: <br>At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.<br>Templates are very concrete and provide context to all these relatively abstract molecules and organisms. Templates are also where clients start seeing the final design in place. In my experience working with this methodology, templates begin their life as HTML wireframes, but over time increase fidelity to ultimately become the final deliverable. Bearded Studio in Pittsburgh follow a similar process, where designs start grayscale and layout-less but slowly increase fidelity until the final design is in place.
