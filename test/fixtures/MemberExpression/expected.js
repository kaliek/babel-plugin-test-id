const Bar = () => <div>{foo['property']}</div>;

const Bar2 = () => <div>{FOO['property']}</div>

const Bar3 = () => <div data-bd-fe-id="Property">{foo['Property']}</div>;

const Bar4 = () => <div data-bd-fe-id="Property">{FOO['Property']}</div>

const Bar5 = () => 
    <div className={cx(styles.a, styles.b)} data-bd-fe-classname="a-b">
        {styles['property']}
    </div>;