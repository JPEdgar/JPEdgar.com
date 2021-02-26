import Editor from "@stfy/react-editor.js";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

function BlogEditor() {
  const CustomHeader = {
    class: Header,
    inlineToolbar: ["link"],
  };

  const CustomList = {
    class: List,
    inlineToolbar: ["link", "bold"],
  };

  const CustomEmbed = {
    class: Embed,
    inlineToolbar: false,
    config: {
      services: {
        youtube: true,
        coub: true,
      },
    },
  };

  return (
    <>
      <h2 className="headerSubtext">Header</h2>
      <div
        style={{
          margin: "0px",
          padding: "5px",
          height: "50px",
          backgroundColor: "lightgray",
          overflow: "hidden",
        }}
      >
        <Editor
          autofocus
          tools={{
            header: CustomHeader,
          }}
        />
        <p className="content">Body</p>
      </div>
      <h2 className="headerSubtext">Body</h2>
      <div style={{ backgroundColor: "lightgray", padding: "5px" }}>
        <Editor
          tools={{
            list: CustomList,
            embed: CustomEmbed,
          }}
        />
      </div>
    </>
  );
}

export default BlogEditor;

/*
function BlogEditor() {
  return (
    <>
      <p>test</p>
      <Editor
        autofocus
        holder="editorjs-container"
        excludeDefaultTools={["header"]}
        onChange={() => console.log("Something is changing!!")}
        onData={(data) => console.log(data)}
        customTools={{
          header: CustomHeader,
        }}
        onReady={() => console.log("Start!")}
        data={{
          time: 1554920381017,
          blocks: [
            {
              type: "header",
              data: {
                text: "Hello Editor.js",
                level: 2,
              },
            },
          ],
          version: "2.12.4",
        }}
      />
    </>
  );
}
*/
