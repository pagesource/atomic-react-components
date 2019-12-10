const accordionContent = [
  {
    accordionHeader: 'Accordion 1',
    accordionBody: (
      <div>
        <img src="https://via.placeholder.com/150" alt="placeholderImage" />
      </div>
    ),
    isOpen: true,
  },
  {
    accordionHeader: 'Accordion 2',
    accordionBody: (
      <div>
        <p>
          Puglias most famous sight is the unique conical houses (Trulli) found in the area around
          Alberobello, a declared UNESCO World Heritage Site.
        </p>
        <figure>
          <img src="https://via.placeholder.com/350" alt="Trulli" />
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
        </figure>
      </div>
    ),
    isOpen: false,
  },
  {
    accordionHeader: 'Accordion 3',
    accordionBody: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    ),
    isOpen: false,
  },
];

const defaultAccordion = {
  className: 'accordion',
  accordionContent: [...accordionContent],
};

export default { defaultAccordion };
