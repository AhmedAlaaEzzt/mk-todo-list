function List() {
  return (
    <div>
      <ul>
        <li>A</li>
        <li>B</li>
        <ol type="1">
          <li>B1</li>
          <li>B2</li>
          <ul>
            <li>B2a</li>

            <ul>
              <ul>
                <li>B2aa</li>
                <li>B2ab</li>
              </ul>
            </ul>
            <li>B2b</li>
            <li>B2c</li>
          </ul>
          <li>B3</li>
          <ol type="1">
            <li>B31</li>
            <li>B32</li>
          </ol>
        </ol>
        <ul></ul>
        <li>c</li>
      </ul>
    </div>
  );
}
export default List;
