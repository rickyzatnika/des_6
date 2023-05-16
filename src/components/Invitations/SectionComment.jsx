import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import moment from "moment/moment";
import useSWR from "swr";
import { FcOk } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";

const SectionComment = ({ guest }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const userId = guest?.userId;

  // get comment
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: posts, error } = useSWR(
    `${process.env.REACT_APP_URI}/comment/${guest?.unique_Code}?userId=${userId}`,
    fetcher
  );
  useEffect(() => {}, [posts, error]);

  if (error) {
    return <div>Error Loading data...</div>;
  }

  // post comment
  const formComment = async ({ comments }) => {
    try {
      setLoading(false);
      await axios
        .patch(
          `${process.env.REACT_APP_URI}/invitation/comment/${guest?.unique_Code}`,
          {
            comments: comments,
            date: moment().format("DD MMMM YYYY, h:mm a"),
          }
        )
        .then(() => {
          setLoading(true);
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              text: "Pesan Terkirim, Terima Kasih.",
              confirmButtonColor: "teal",
            });
            reset();
            setLoading(false);
            window.location.reload();
          }, 3000);
          return () => clearTimeout(setTimeout);
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "pesan tidak terikirim, coba lagi",
        confirmButtonColor: "teal",
      });
      reset();
    }
  };

  return (
    <div className="w-full bg-white h-full pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:px-20 gap-0 lg:gap-4 ">
        <div className="col-span-1 lg:col-span-4 bg-zinc-100 h-fit shadow-xl shadow-[#9c8450]/40 relative lg:sticky top-0">
          <div className="py-8 text-center">
            <h3 className="text-2xl lg:text-3xl text-[#bfa95b]  ">
              Pesan{" "}
              <span className="font-[parisienne] text-5xl text-[#bfa95b]">
                &
              </span>{" "}
              Harapan
            </h3>
            <p className="text-[#4e4d3e] text-sm sm:text-md">
              Berikan do'a dan ucapan terbaik untuk kami
            </p>
          </div>
          <form
            onSubmit={handleSubmit(formComment)}
            className=" px-4 pb-10 lg:px-10 w-full"
          >
            <div className="pt-2 antialiased">
              <textarea
                name=""
                cols="30"
                rows="10"
                className="w-full p-4 focus:outline-[#867041] focus:border-none placeholder:italic rounded text-[#444337] border-none  "
                placeholder="Tulis Pesan ..."
                {...register("comments", {
                  required: true,
                })}
              ></textarea>
            </div>
            <button className="w-full py-2 px-6 bg-[#9c8450] hover:bg-[#867041] rounded  text-zinc-200 hover:text-zinc-100 ">
              {loading ? <span>sedang mengirim...</span> : <span>Kirim</span>}
            </button>
          </form>
        </div>
        <div className="col-span-1 lg:col-span-8 relative">
          <div className="w-full h-[35%] bg-gradient-to-t from-[#000] to-transparent  absolute bottom-10 left-0 right-0 z-20" />
          <div className="w-full py-10 relative overflow-y-scroll h-[95%] bg-[#191919] pl-3 lg:px-10 ">
            <h2 className="text-zinc-400">
              {posts?.length + 1} <span className="italic">Post Comment</span>
            </h2>
            <ol className="p-8">
              <li className="w-full border-b pb-4 border-zinc-700">
                <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                  <FaUserCircle className="text-[#97864f]" size={24} />
                </div>
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-sm sm:text-md leading-none text-zinc-300 ">
                    WebQodes
                  </span>
                  <small className="text-zinc-500 ">10 May 2023, 9:14 pm</small>
                </div>
                <p className="mb-1 p-2 text-sm leading-relaxed sm:text-md  text-zinc-400 ">
                  Happy wedding Fauzan & Manda, semoga menjadi keluarga yang
                  Sakinah, Mawadah & Warohmah.. Amiin ..
                </p>
              </li>
            </ol>

            {posts?.map((post, i) => (
              <ol key={i} className="border-[#6e664b] p-8  ">
                <li className="w-full border-b pb-4 border-zinc-700">
                  <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                    <FaUserCircle className="text-[#97864f]" size={24} />
                  </div>
                  <div className="flex items-center flex-wrap gap-1 justify-between w-full mb-3">
                    <span className="capitalize text-sm sm:text-md font-sans leading-none text-zinc-300 ">
                      {post?.name}
                    </span>
                    <small className="text-zinc-500">{post?.date}</small>
                  </div>
                  <p className="mb-1 p-2 text-sm leading-relaxed sm:text-md  text-zinc-400">
                    {post?.comments}
                  </p>
                </li>

                {!post?.reply ? (
                  <span className="text-sm italic text-zinc-500">
                    Belum ada balasan ...
                  </span>
                ) : (
                  <div className="bg-zinc-400/10 w-full h-auto pb-10 pt-2 px-2 shadow rounded-md shadow-black-20 relative">
                    <p className="mb-2 italic text-sm text-zinc-500">
                      Balasan dari Pidi & Fitri
                    </p>
                    <div className="relative ">
                      <p className="text-zinc-400 text-sm sm:text-md leading-relaxed ">
                        {post?.reply}
                      </p>
                    </div>
                  </div>
                )}
              </ol>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComment;
