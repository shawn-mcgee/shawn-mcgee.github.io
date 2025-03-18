export default function HelloWorld() {
  function onClick() {
    console.log("Hello World")
  }

  return <a className="btn btn-ghost" onClick={onClick}>Hello World</a>
}