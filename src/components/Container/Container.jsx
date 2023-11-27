import { ContainerStyles } from './ContainerStyles.styled';

const Container = ({ children }) => {
  return <ContainerStyles className="container">{children}</ContainerStyles>;
};

export default Container;
