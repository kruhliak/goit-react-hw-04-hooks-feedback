import { Thumb } from './Section.styles';

function Section(props) {
  const { title, children } = props;
  return (
    <Thumb>
      <p>{title}</p>
      {children}
    </Thumb>
  );
}

export default Section;
