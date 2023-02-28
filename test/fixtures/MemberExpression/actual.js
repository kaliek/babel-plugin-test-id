const Bar = () => <div>{foo['property']}</div>

const Bar2 = () => <div>{FOO['property']}</div>

const Bar3 = () => <div>{foo['Property']}</div>

const Bar4 = () => <div>{FOO['Property']}</div>

const Bar5 = () => 
    <div className={cx(styles.a, styles.b)}>
        {styles['property']}
    </div>