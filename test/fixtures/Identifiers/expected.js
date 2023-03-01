//Identifier
function MyComponent(props) {
  return (
    <div data-bd-fe-component="MyComponent" data-bd-fe-id={_bd_fe_testid}>{props}</div>
  );
  var _bd_fe_testid = props?._bd_fe_testid;
}
const MyComponent2 = (props) => {
  return <div>{props}</div>;
};

//JSXIdentifier
const component = () => <MyComponent label="component" />;
