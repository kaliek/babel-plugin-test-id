function Foo() {
    return <div data-bd-fe-component="Foo" data-bd-fe-id={_bd_fe_testid}>{true && false}</div>
    var _bd_fe_testid = _bd_fe_param?._bd_fe_testid;
};

const Foo2 = () => {
    return <div>{true && false}</div>
};