import imgArticle from "../assets/images/image-retro-pcs.jpg";

export const Article = () => {
  return (
    <article>
      <div>
        <img src={imgArticle} alt="" />
      </div>
      <div>
        <p>01</p>
        <h2>Reviving Retro PCs</h2>
        <p> What happens when old PCs are given modern upgrades?</p>
      </div>
    </article>
  );
};
