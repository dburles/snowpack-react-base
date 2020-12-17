const Button = (props) => {
  return (
    <button
      {...props}
      css={{
        backgroundColor: 'blue.500',
        color: 'white',
        borderWidth: 0,
        padding: '2 3',
      }}
    />
  );
};

export default Button;
