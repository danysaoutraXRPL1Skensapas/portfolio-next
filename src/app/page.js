import SkillCard from "@/components/SkillCard";
import Hero from "@components/Hero"

const skills = [
  {
    nama: "JavaScript",
    level: "Menengah"
  },
  {
    nama: "Next.js",
    level: "Dasar"
  },
  {
    nama: "C",
    level: "Dasar"
  },
  {
    nama: "Linux",
    level: "Dasar"
  },
  {
    nama: "HTML dasar",
    level: "Menengah"
  },
  {
    nama: "Mengetik cepat",
    level: "Mahir"
  }
];

export default function Home() {
  const nama = "Dany Saputra";
  const tahunLahir = 2010;
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      nama="Andi Pratama"
      tagline="Siswa kelas X SMK, calon Junior Web Developer diKelas Industri UBIG."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>
    </main>
  );
}
