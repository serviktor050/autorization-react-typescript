import React from "react";
import { Redirect } from "react-router-dom";

import { SliderComponent } from "../../SliderComponent";

export const Main: React.FC = () => {
  const userTokenLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const googleIdLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("googleId"))
  );

  const isAuth = userTokenLocalStorage || googleIdLocalStorage;

  return (
    <div className="page-container">
      {isAuth && (
        <>
          <h1>Main Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veritatis quisquam tempora ipsam? Vel iusto incidunt saepe veniam id
            eius ab molestiae, quas quasi ducimus. Quidem commodi error eaque,
            quibusdam labore neque omnis quia aperiam sapiente consectetur
            necessitatibus obcaecati voluptate, dolorem magni alias, tempora
            sed. Itaque sunt consectetur voluptas maiores consequuntur? Maiores
            reprehenderit repudiandae aperiam soluta incidunt eum qui ratione?
          </p>
          <h2>Veniam rerum</h2>
          <p>
            Veniam rerum totam molestiae tempore deserunt, accusantium ex quae
            consequatur dolorum id. Vitae necessitatibus dolores voluptates
            suscipit adipisci ab doloribus natus inventore delectus eveniet at
            expedita quos nesciunt dolore omnis sapiente magni, fugit, quisquam
            perspiciatis amet optio doloremque? Explicabo ut corporis aliquam
            maxime obcaecati repellat facilis, officia quis iure suscipit
            dignissimos optio beatae, aspernatur error minus neque consequatur
            esse fugiat sit eum! Eum, perferendis, perspiciatis corrupti totam
            suscipit repellat cum architecto reprehenderit molestias enim odio
            quam rem molestiae magnam earum voluptatem. Laborum dolore deserunt
            accusantium velit eveniet, quo obcaecati cumque.
          </p>
          <SliderComponent />
          <h2>Veniam rerum</h2>
          <p>
            Veniam rerum totam molestiae tempore deserunt, accusantium ex quae
            consequatur dolorum id. Vitae necessitatibus dolores voluptates
            suscipit adipisci ab doloribus natus inventore delectus eveniet at
            expedita quos nesciunt dolore omnis sapiente magni, fugit, quisquam
            perspiciatis amet optio doloremque? Explicabo ut corporis aliquam
            maxime obcaecati repellat facilis, officia quis iure suscipit
            dignissimos optio beatae, aspernatur error minus neque consequatur
            esse fugiat sit eum! Eum, perferendis, perspiciatis corrupti totam
            suscipit repellat cum architecto reprehenderit molestias enim odio
            quam rem molestiae magnam earum voluptatem. Laborum dolore deserunt
            accusantium velit eveniet, quo obcaecati cumque.
          </p>
          <p>
            Veniam rerum totam molestiae tempore deserunt, accusantium ex quae
            consequatur dolorum id. Vitae necessitatibus dolores voluptates
            suscipit adipisci ab doloribus natus inventore delectus eveniet at
            expedita quos nesciunt dolore omnis sapiente magni, fugit, quisquam
            perspiciatis amet optio doloremque? Explicabo ut corporis aliquam
            maxime obcaecati repellat facilis, officia quis iure suscipit
            dignissimos optio beatae, aspernatur error minus neque consequatur
            esse fugiat sit eum! Eum, perferendis, perspiciatis corrupti totam
            suscipit repellat cum architecto reprehenderit molestias enim odio
            quam rem molestiae magnam earum voluptatem. Laborum dolore deserunt
            accusantium velit eveniet, quo obcaecati cumque.
          </p>
        </>
      )}
      {!isAuth && <Redirect to="/login" />}
    </div>
  );
};
