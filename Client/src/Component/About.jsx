import React from 'react'
import Heading from '../Reuse/Heading'
import Aboutimg from '../../public/GA.jpg'
import About2 from './About2'
const About = () => {
  return (
    <>
      <div className="flex justify-content-center items-center flex-col">
        <Heading
          title={'Know Abouts Us'}
          discrption={'Zoon Of Our Jurney'}
          textcolor={'white'}
        />
        <div className="flex justify-around items-center p-5 sm:flex-row flex-col">
          <div className="overflow-hidden transition-all hover:scale-105">
            <img src={Aboutimg} className=" w-80 sm:mb-0 mb-10" />
          </div>
          <div className="sm:h-[100vh] h-0 w-[1px] shadow-[0_0_20px_3px_rgba(246,79,49,1)]"></div>
          <div className="sm:p-5 p-1 text-white font-serif text-sm text-justify sm:w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad
            rerum. Consequuntur, voluptate vero tenetur excepturi pariatur et
            culpa maiores ullam voluptatibus dolores recusandae ipsam commodi,
            laborum optio laboriosam saepe, cumque beatae iure accusamus ad
            debitis! Quos facilis mollitia aspernatur, eius aliquam illum
            assumenda delectus? Laboriosam cumque cum architecto distinctio quis
            animi eaque magnam doloremque eligendi similique voluptatem dolor,
            adipisci dolore minus nisi quibusdam nostrum aspernatur veritatis
            illum facere praesentium impedit. Harum, explicabo! Eius quasi
            molestias illum unde rem voluptate, dolorem temporibus nesciunt
            minus non repellendus vel id beatae illo, assumenda recusandae
            soluta eum porro tempora nisi quis nulla veritatis deleniti? Qui
            minima, accusamus inventore, praesentium odio dolorum culpa
            molestiae laudantium a ratione nihil, exercitationem quia ipsa
            maiores odit officia atque cumque reiciendis! Recusandae provident
            dignissimos deserunt tenetur commodi repudiandae, illo quia.
            Sapiente est minus, provident nulla alias, qui aut eveniet officia
            iste ipsa quaerat facere mollitia quam quae aliquam reprehenderit
            doloribus dolore maiores! Dolore vel aliquid quam corrupti ipsa
            dolor nostrum iure. Ratione totam delectus, repellendus illum alias
            architecto mollitia atque eos sed ea dignissimos voluptate
            praesentium dolore harum exercitationem laborum voluptas accusamus
            quas temporibus quam fugiat. Ullam at eveniet illo vel facere rerum
            velit similique esse odit. Iure aut provident omnis quaerat, nihil
            quae mollitia nulla ullam fuga obcaecati amet aspernatur minima ex
            quam, perferendis placeat accusamus animi consectetur eum adipisci
            cumque modi facilis expedita. Voluptate laboriosam obcaecati iste?
            At incidunt nemo eligendi laborum sapiente fuga, iusto aut assumenda
            quia facilis laudantium quam voluptas id cupiditate. Temporibus
            delectus sequi eligendi laborum cumque enim unde autem
            exercitationem at. Nobis recusandae dolorem praesentium adipisci
            laboriosam enim maxime doloribus nemo cumque aperiam. Impedit
            voluptatem ipsum iusto, cupiditate dolores, cumque quod, nobis optio
            ut assumenda architecto odio ullam sed harum eligendi ex quae magni
          </div>
        </div>
      </div>

      <About2 />
    </>
  )
}

export default About
