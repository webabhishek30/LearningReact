import React, { useEffect } from "react";

const ReactMemoGrandChild = React.memo(({count, count2, count1}) => {

    console.log("React Memo Grand Child - Rendered.")

    return<>
        <h3>React Memo Grand Child - {count}</h3>
    </>;
})
export default ReactMemoGrandChild;