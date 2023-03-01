function Foo(a,b) {
    return <div data-bd-fe-component="Foo" data-bd-fe-id={_bd_fe_testid}>{a + b}</div>
    var _bd_fe_testid = a?._bd_fe_testid;
}

const Foo2 = (a,b) => {
    return <div>{a + b}</div>
}