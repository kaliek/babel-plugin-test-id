//Identifier
function MyComponent(props) {
  var _internal_id = props?._internal_id;
  return (
    <div data-component="MyComponent" data-id={_internal_id}>{props}</div>
  );
}
const MyComponent2 = (props) => {
  return <div>{props}</div>;
};

//JSXIdentifier
const component = () => <MyComponent label="component" />;
