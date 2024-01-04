import React from "react";
import { Card, Button, Tooltip } from "@nextui-org/react";
import PromptButtons from "./PromptButtons.jsx";
import { StarIcon, EditIcon } from "../assets/icons.jsx";

function PromptInput({
  handleKeyPress,
  type,
  setGenerated,
  setPormptInput,
  setPromptOutput,
}) {
  function handleGenerate() {
    setGenerated(true);
    generatePrompt();
  }

  function generatePrompt() {
    setTimeout(() => {
      setPromptOutput(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non dolor hic, impedit eveniet architecto ratione necessitatibus. Cupiditate fuga maxime sed, fugiat perspiciatis mollitia, cum ad soluta facere necessitatibus, id ducimus omnis veritatis magni dolor quisquam odio error. Alias neque explicabo iure dolore minima provident facilis enim illo ab odit nisi possimus ipsam sapiente ea amet, officiis quisquam eius, perferendis magnam numquam voluptas cumque excepturi obcaecati! A delectus praesentium sed fugit ad, ipsum hic veritatis. Quos vero voluptatibus natus delectus quidem accusamus, eveniet esse quasi labore id similique eos ex voluptatum voluptatem provident amet earum assumenda sunt, optio temporibus corrupti corporis! Nam consequuntur repellat in! Necessitatibus accusantium unde esse quos dolorum soluta possimus omnis voluptatem fugiat. Dolorum corrupti ab, eum, omnis optio mollitia minus nam quisquam ipsa unde nihil incidunt totam inventore eveniet ex itaque eaque laboriosam distinctio provident nobis iste! Iusto unde, tenetur voluptates officiis vel nostrum at quod, esse magnam ut reprehenderit aliquam quae soluta iste ipsa repudiandae voluptatum. Nam, culpa? Enim suscipit voluptatum qui laudantium. Quibusdam ducimus veniam ea sed odio esse odit voluptas animi illum quia deleniti suscipit vel quisquam amet, repudiandae maxime alias consequatur voluptates tenetur dolorem modi quasi libero ab. Quae omnis eligendi rem quis suscipit. Animi id earum assumenda dolorem eveniet tempora, aut modi recusandae et non cum nostrum eum est sequi aperiam doloremque magni magnam eos in deleniti dolore. Quisquam dolorem illum laboriosam tempora sequi sapiente, facere nostrum, alias recusandae magnam natus fugiat quo veniam unde a voluptatem molestias maiores, atque amet aut quae neque. Adipisci fuga obcaecati consequuntur repudiandae alias assumenda id expedita perspiciatis, placeat quos reiciendis consectetur nesciunt distinctio asperiores molestiae unde, ratione et. Quibusdam, odit veniam officiis maxime laboriosam adipisci quia quis facilis ex fugit repudiandae? Obcaecati dolorem reiciendis ipsa quos atque quibusdam tempore esse quis. Laudantium amet minima assumenda doloribus soluta eveniet recusandae libero ad omnis, vero, suscipit eaque molestias, odio beatae voluptas! In ea possimus sapiente rerum qui enim dolor dolore architecto eligendi unde accusantium, velit maiores similique, nobis autem magni delectus eaque necessitatibus, dignissimos atque? Illum ratione consectetur aspernatur cum, non eius excepturi, fugit quo vero doloremque quaerat ducimus ipsa, molestias autem impedit? Asperiores, consequatur? Quasi quae natus quod fugit esse minus in, eos impedit eius placeat laudantium dolores modi possimus accusantium nemo quaerat atque! Odio possimus, magni blanditiis inventore voluptatum labore libero repudiandae consequuntur ipsa aut accusantium earum optio reprehenderit delectus ut consectetur, mollitia iure."
      );
    }, 2000);
  }

  const handleTextareaChange = (event) => {
    const currentValue = event.target.value;
    setPormptInput(currentValue);
  };

  return (
    <Card className="p-3 relative flex flex-col justify-between h-1/3 lg:h-1/4">
      <textarea
        placeholder="Enter a prompt..."
        type="text"
        className="all-unset h-full max-w-4/5 overflow-wrap-break mb-2 pr-10"
        onChange={handleTextareaChange}
      />
      <div className="absolute right-5 top-5 flex flex-col h-10 justify-between">
        <Tooltip content="Edit Prompt" delay={1000}>
          <div className="cursor-pointer">
            <EditIcon />
          </div>
        </Tooltip>
      </div>
      <div
        onKeyDown={handleKeyPress}
        className="flex flex-col lg:flex-row gap-1 lg:gap-3"
      >
        <Button
          type="submit"
          onClick={() => handleGenerate()}
          color="secondary"
          endContent={<StarIcon />}
        >
          Generate
        </Button>
        <PromptButtons type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
