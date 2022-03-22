import React from "react";
import quadir from "../../Images/AdvisoryCommittee/Quadir.png";
import babu from "../../Images/AdvisoryCommittee/Hasan-Babu.jpg";
import mahbub from "../../Images/AdvisoryCommittee/mahbubur-rahman.png";
import Ganesh from "../../Images/AdvisoryCommittee/ganesh.jpg";
import samim from "../../Images/AdvisoryCommittee/Samim.png";
import sanaullah from "../../Images/AdvisoryCommittee/sana-ullah.png";
import based from "../../Images/AdvisoryCommittee/sir.jpg";
import { Link } from "react-router-dom";

const advisors = [
  {
    id: 1,
    name: "Barrister Shameem Haider Patwary",
    href: "#",
    title: "Chairman,Board of Trustees,DIU",
    imageSrc: `${samim}`,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },

  {
    id: 3,
    name: "Professor Dr. Ganesh Chandra Saha",
    href: "#",
    title: "Vice-chancellor,DIU",
    imageSrc: `${Ganesh}`,
    imageAlt: "Professor Dr. Nurul Momen",
  },
  {
    id: 5,
    name: "Dr. Hafiz Md. Hasan Babu",
    href: "#",
    title: "Advisor (Dep. of CSE,DIU)Professor, DU",
    imageSrc: `${babu}`,
    imageAlt: "Advisor (Dep. of CSE,DIU)Professor, DU",
  },
  {
    id: 6,
    name: "Professor Dr. A.T.M Mahbubur Rahman Sarkar",
    href: "#",
    title: "Dean(Acting) Chairman, Department of CSE, DIU",
    imageSrc: `${mahbub}`,
    imageAlt: "Chairman,Department of CSE,DIU",
  },
  {
    id: 2,
    name: "Md. Abdul Based",
    href: "#",
    title: "Professor & Chairman, Department of EEE, DIU",
    imageSrc: `${based}`,
    imageAlt: "Md. Abdul Based images",
  },
];

const Committee = () => {
  return (
    <article className="committee">
      <div className="mx-auto px-2 sm:px-6 lg:px-44">
        <div className="py-12">
          <h1 className="text-[#1F1F52] rounded shadow bg-[#ffffff] py-5 pl-2 text-3xl font-bold">
            ADVISORY COMMITTEE
          </h1>
          <div className="pt-6">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {advisors.map((advisor) => (
                <Link
                  key={advisor.id}
                  to={advisor.href}
                  className="group rounded bg-white shadow"
                >
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-t overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={advisor.imageSrc}
                      alt={advisor.imageAlt}
                      className="w-full h-[370px] object-center object-cover group-hover:opacity-75 "
                    />
                  </div>
                  <div className="pl-2 py-3">
                    <h3
                      className="text-lg font-[550
                    ] text-gray-900"
                    >
                      {advisor.name}
                    </h3>
                    <p className=" text-sm text-gray-700">{advisor.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-12">
          <h1 className="text-[#1F1F52] rounded shadow bg-[#ffffff] py-5 pl-2 text-3xl font-bold">
            AD HOC COMMITTEE
          </h1>
          <div className="pt-6">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {advisors.map((advisor) => (
                <Link
                  key={advisor.id}
                  to={advisor.href}
                  className="group rounded bg-white shadow"
                >
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-t overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={advisor.imageSrc}
                      alt={advisor.imageAlt}
                      className="w-full h-[370px] object-center object-cover group-hover:opacity-75 "
                    />
                  </div>
                  <div className="pl-2 py-3">
                    <h3
                      className="text-lg font-[550
                    ] text-gray-900"
                    >
                      {advisor.name}
                    </h3>
                    <p className=" text-sm text-gray-700">{advisor.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Committee;
