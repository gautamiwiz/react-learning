import {useEffect, useState} from 'react';
// import {Link, NavLink} from 'react-router';

export default function App() {
  useEffect(() => {
    console.log('Renders when?');
    document.title = 'Learning ReactJS';
  }, []);
  console.log('App Component Rendered..');
  console.log('URL : ', window.location.href);
  console.log('Path : ', window.location.pathname);

  let [count, setCount] = useState(1);
  let [setCountTo, setSetCountTo] = useState(0);
  return (
    <form>
      <h2>Count is {count} </h2>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setCount((c) => c + 1);
          }}
        >
          Increase
        </button>
        <button
          className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setCount((c) => Math.max(0, c - 1));
          }}
        >
          Decrease
        </button>
        <button
          className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <input
          type="text"
          value={setCountTo}
          className="block min-w-0 py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          style={{
            border: '1px solid grey',
            height: '30px',
            borderRadius: '8px',
          }}
          onChange={(e) => {
            setSetCountTo(e.target.value);
          }}
        />
        <button
          className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-green-500 hover:bg-green-600 text-white cursor-pointer"
          type="button"
          onClick={() => setCount(Number(setCountTo))}
        >
          Set to {setCountTo}
        </button>
      </div>

      {/* <p>Home page content will come here</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        dolores exercitationem ipsam maiores non ad repellat illo omnis
        voluptatem aspernatur adipisci, veritatis optio sunt illum!
        Reprehenderit ad doloremque delectus incidunt? Earum architecto,
        repudiandae sequi vero esse sit possimus nulla, adipisci modi est
        facilis voluptatibus at quidem dicta aspernatur excepturi quae ea
        sapiente a aut pariatur. Enim non facilis fuga tenetur! Optio
        repudiandae nihil suscipit illo cum excepturi ea eaque nulla ipsa
        ducimus quidem deleniti adipisci consectetur sequi ad consequatur quae
        nesciunt cupiditate laborum quis vero inventore, fugit vitae deserunt.
        Provident! Sed nam aperiam distinctio. Eligendi aperiam minus
        exercitationem mollitia, animi dolorum cum repellendus magni sequi
        commodi earum enim amet fuga labore illo, quas nihil rerum veritatis.
        Nulla excepturi ullam minus. Delectus harum, quas quasi tempore adipisci
        sunt distinctio facilis culpa veritatis maxime, rem incidunt cupiditate.
        Vel ratione, minus repudiandae dignissimos, totam eveniet sed assumenda
        optio, suscipit consequuntur eos sint maiores. Quis reprehenderit alias
        laborum explicabo ut eius? Recusandae vitae maiores autem ab accusantium
        doloribus assumenda numquam delectus temporibus ratione aspernatur
        consectetur officiis dolore facilis natus, sequi ipsa tempora rerum
        eligendi? Corrupti ut ab, non consectetur, reiciendis quam ipsam
        mollitia tempora delectus quae architecto minus quo eveniet officia
        doloremque corporis porro sit voluptate! Expedita minus praesentium
        accusantium quas iusto cum illum? Ipsa, corrupti. Soluta rem saepe,
        debitis tempore voluptas quo distinctio illum rerum ullam architecto
        adipisci, iste recusandae quas inventore possimus expedita provident
        facilis accusamus a animi. Nisi error nam atque. Quae cumque
        exercitationem error optio, soluta aspernatur. Beatae minus officiis
        tempore a repudiandae aperiam enim consequuntur quas nulla! Modi magni
        voluptatem libero placeat eius quia totam, ea molestiae aliquam in.
        Ratione illum incidunt consequatur temporibus modi quia quae placeat,
        repellendus nulla commodi quis ad rerum, beatae ipsa veniam aspernatur
        fugit non. Numquam, possimus. Vel ea doloribus, libero quis laborum
        facere?
      </p> */}
    </form>
  );
}
