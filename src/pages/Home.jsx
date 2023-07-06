import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  const handleNavMouseEnter = (event) => {
    const target = event.target;
    target.classList.add('active');
  };

  const handleNavMouseLeave = (event) => {
    const target = event.target;
    target.classList.remove('active');
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header
            className="fixed left-0 top-0 h-full flex flex-col justify-center items-center z-10 bg-white"
            {...slideAnimation('down')}
          >
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            <nav>
              <ul>
                <li>
                  <a href="#home">Página Inicial</a>
                </li>
                <li>
                  <a
                    href="#store"
                    onMouseEnter={handleNavMouseEnter}
                    onMouseLeave={handleNavMouseLeave}
                  >
                    Loja
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onMouseEnter={handleNavMouseEnter}
                    onMouseLeave={handleNavMouseLeave}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onMouseEnter={handleNavMouseEnter}
                    onMouseLeave={handleNavMouseLeave}
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onMouseEnter={handleNavMouseEnter}
                    onMouseLeave={handleNavMouseLeave}
                  >
                    Dúvidas
                  </a>
                </li>
              </ul>
            </nav>
          </motion.header>

          <section id="home" className="ml-14">
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text" style={{ fontSize: '3rem' }}>
                  Liberte sua Imaginação<br className="x1:block hidden" />
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-400 text-base">
                  Transforme sua criatividade em realidade.{' '}
                  <strong>Crie uma camiseta personalizada com IA</strong> e
                  aproveite nossa ferramenta de modelagem 3D.
                </p>

                <CustomButton
                  type="filled"
                  title="Customizar"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </section>

          <section id="store" className="ml-14">
            <h2>Loja</h2>
            {/* Adicione imagens e descrições dos produtos disponíveis para customização aqui */}
          </section>

          <section id="about" className="ml-14">
            <h2>Sobre</h2>
            {/* Adicione informações sobre a empresa e sua história aqui */}
          </section>

          <section id="contact" className="ml-14">
            <h2>Contato</h2>
            {/* Adicione um formulário de contato aqui */}
          </section>

          <section id="faq" className="ml-14">
            <h2>Dúvidas</h2>
            {/* Adicione uma lista de perguntas frequentes e suas respostas aqui */}
          </section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
