import Image from "next/image";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Shelf({ shelf_name }: { shelf_name: string }) {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-2xl font-bold ms-8 mt-8">{shelf_name}</h1>
      {shelf_name === "Computer Science" ? (
        <div className="mt-16 ms-8 flex gap-10">
          <div className="flex flex-col items-center">
            <Image
              alt="Book"
              src="/books/Compilers - Principles, Techniques, and Tools.jpg"
              width={200}
              height={300}
              className="rounded-md cursor-pointer"
              onClick={() => router.push("/book-view")}
            />
            <p className="mt-2">
              Compilers - Principles, Techniques, and Tools
            </p>
            <Image
              alt="five stars"
              src="/five-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/Introduction To Algorithms.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">Introduction To Algorithms</p>
            <Image
              alt="four half stars"
              src="/four-half-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/Operating System Concepts.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">Operating System Concepts</p>
            <Image
              alt="one half stars"
              src="/one-half-stars.png"
              width={100}
              height={20}
            />
          </div>
        </div>
      ) : shelf_name === "English" ? (
        <div className="mt-16 ms-8 flex gap-10">
          <div className="flex flex-col items-center">
            <Image
              alt="Book"
              src="/books/Elements of Style.jpg"
              width={200}
              height={300}
              className="rounded-md cursor-pointer"
              onClick={() => router.push("/book-view")}
            />
            <p className="mt-2">Elements of Style</p>
            <Image
              alt="five stars"
              src="/five-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/The Notion Anthology of American Literature.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">The Notion Anthology of American Literature</p>
            <Image
              alt="four half stars"
              src="/four-half-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/An Introduction to Language.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">An Introduction to Language</p>
            <Image
              alt="four half stars"
              src="/four-half-stars.png"
              width={100}
              height={20}
            />
          </div>
        </div>
      ) : shelf_name === "Physics" ? (
        <div className="mt-16 ms-8 flex gap-10">
          <div className="flex flex-col items-center">
            <Image
              alt="Book"
              src="/books/University Physics.jpg"
              width={200}
              height={300}
              className="rounded-md cursor-pointer"
              onClick={() => router.push("/book-view")}
            />
            <p className="mt-2">University Physics</p>
            <Image
              alt="five stars"
              src="/five-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/Introduction to Electrodynamics.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">Introduction to Electrodynamics</p>
            <Image
              alt="four half stars"
              src="/four-half-stars.png"
              width={100}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="min-h-[300px]">
              <Image
                alt="Book"
                src="/books/Priciples of Quantum Machanics.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              />
            </div>
            <p className="mt-2">Priciples of Quantum Machanics</p>
            <Image
              alt="four half stars"
              src="/four-half-stars.png"
              width={100}
              height={20}
            />
          </div>
        </div>
      ) : shelf_name === "Your Books" ? (
        <div className="mt-16 ms-8 flex gap-10">
          <div className="flex flex-col items-center cursor-pointer">
            <div className="h-[300px] w-[200px] rounded-md bg-gray-500/40 flex justify-center items-center">
              <Plus className="w-[50px] h-[50px]" />
              {/* <Image
                alt="Book"
                src="/books/Priciples of Quantum Machanics.jpg"
                width={200}
                height={300}
                className="rounded-md cursor-pointer "
                onClick={() => router.push("/book-view")}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
