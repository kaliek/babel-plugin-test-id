function Foo() {
    return <div data-component="Foo" data-id={_internal_id}>{true && false}</div>
    var _internal_id = _internal_param?._internal_id;
};

const Foo2 = () => {
    return <div>{true && false}</div>
};