import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [openWindow, setOpenWindow] = useState("about");

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white font-mono overflow-hidden relative">
      {/* Header */}
      <div className="w-full text-center text-3xl font-bold py-6 bg-gradient-to-b from-black to-transparent z-10">
        👨‍💻 Umang's Developer Portfolio
      </div>

      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1.5} />
          <mesh rotation={[1, 1, 0]}>
            <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
            <meshStandardMaterial color="#00FFFF" wireframe />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Navigation Bar */}
      <div className="z-10 relative flex justify-center space-x-8 py-4 bg-black bg-opacity-60">
        <button onClick={() => setOpenWindow("about")}>👤 About</button>
        <button onClick={() => setOpenWindow("projects")}>📂 Projects</button>
        <button onClick={() => setOpenWindow("skills")}>🧠 Skills</button>
        <button onClick={() => setOpenWindow("certs")}>📜 Certificates</button>
      </div>

      {/* Main Window */}
      <motion.div
        key={openWindow}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 relative mx-auto mt-8 w-[90%] max-w-4xl bg-black bg-opacity-70 rounded-xl p-6 shadow-2xl"
      >
        {openWindow === "about" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I'm Umang — a full-stack web developer passionate about building
              modern, animated, and Linux-inspired user interfaces. I specialize
              in the MERN stack and love working with DevOps tools like Docker,
              GitHub, and Linux.
            </p>
          </div>
        )}

        {openWindow === "projects" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>💻 Portfolio Linux OS UI</li>
              <li>📬 Node.js Contact Form with MongoDB</li>
              <li>💬 Realtime Chat App using Socket.IO</li>
              <li>📊 Admin Dashboard with React & Charts</li>
            </ul>
          </div>
        )}

        {openWindow === "skills" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png"
                alt="React"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png"
                alt="Node.js"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png"
                alt="MongoDB"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png"
                alt="Docker"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png"
                alt="GitHub"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/linux/linux.png"
                alt="Linux"
                className="w-12"
              />
            </div>
          </div>
        )}

        {openWindow === "certs" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Certificates</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Meta Full Stack Web Development (Coursera)</li>
              <li>Udemy DevOps Bootcamp</li>
              <li>Advanced JavaScript - FreeCodeCamp</li>
              <li>Responsive Web Design - Scrimba</li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center text-sm text-gray-300 py-2 bg-black bg-opacity-60">
        © {new Date().getFullYear()} Umang — Built with React, TailwindCSS & ❤️
      </div>
    </div>
  );
}

export default App;
