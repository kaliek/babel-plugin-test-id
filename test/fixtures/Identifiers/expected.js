//Identifier
function MyComponent(props) {
  return (
    <div data-component="MyComponent" data-id={_internal_id}>{props}</div>
  );
  var _internal_id = props?._internal_id;
}
const MyComponent2 = (props) => {
  return <div>{props}</div>;
};

//JSXIdentifier
const component = () => <MyComponent label="component" />;
