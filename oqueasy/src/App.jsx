import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./ui/AppSidebar";
import Header from "./ui/Header";
import questions from "./ui/topics";
import SearchBar from "./ui/SearchBar";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TopicCard from "./ui/TopicCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [topics, setTopics] = useState(questions);
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      title: "Physics Revision",
      tags: ["Mechanics"],
      completion: 60,
      accuracy: 70,
      cards: 5,
      difficulty: "Intermediate",
      last_edit: "Edited now",
      description: "Damn",
    },
    {
      id: uuidv4(),
      title: "Physics SAU Preparation",
      tags: ["Kinematics"],
      completion: 40,
      accuracy: 50,
      cards: 6,
      difficulty: "Beginner",
      last_edit: "Edited now",
      description: "Damn",
    },
    {
      id: uuidv4(),
      title: "Optics SAT",
      tags: ["Optics"],
      completion: 80,
      accuracy: 90,
      cards: 7,
      difficulty: "Advanced",
      last_edit: "Edited now",
      description: "Damn",
    },
  ]);
  const [createPressed, setCreatePressed] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyPressed, setStudyPressed] = useState("");
  const [index, setIndex] = useState(0);
  const [editPressed, setEditPressed] = useState("");
  const [newCard, setNewCard] = useState({
    id: uuidv4(),
    title: "",
    tags: ["Mechanics"],
    completion: 0,
    accuracy: 0,
    cards: 0,
    difficulty: "Intermediate",
    last_edit: "5 minutes ago",
    description: "",
  });
  const [editCard, setEditCard] = useState({
    id: uuidv4(),
    title: "",
    tags: ["Mechanics"],
    completion: 0,
    accuracy: 0,
    cards: 0,
    difficulty: "Intermediate",
    last_edit: "5 minutes ago",
    description: "",
  });

  function filterCards(cardsList) {
    return cards.filter((item, index) => {
      if (!searchText) {
        return item;
      } else if (item.title.includes(searchText)) {
        return item;
      }
    });
  }

  const filteredCards = filterCards(cards);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-gray-100">
        <SidebarTrigger className={"fixed top-5 left-2"} />
        <div className="flex flex-col gap-4">
          <Header
            setTopics={setTopics}
            setCards={setCards}
            createPressed={createPressed}
            setCreatePressed={setCreatePressed}
            newCard={newCard}
            setNewCard={setNewCard}
          />
          <SearchBar searchtext={searchText} setSearchText={setSearchText} />
          <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCards.map((item, index) => {
              return (
                <TopicCard
                  editPressed={editPressed}
                  setEditPressed={setEditPressed}
                  setStudyPressed={setStudyPressed}
                  key={index}
                  info={item}
                />
              );
            })}
          </div>
          {editPressed && (
            <Dialog open={editPressed ? true : false} className="p-0">
              <DialogContent className="p-0">
                <DialogHeader className="p-4 md:p-6">
                  <DialogTitle className="text-xl font-medium">
                    Edit Deck
                  </DialogTitle>
                </DialogHeader>
                <hr className="h-[2px] bg-gray-200 w-full" />
                <div className="py-4 px-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-700 font-medium">
                      Deck Title
                    </p>
                    <input
                      type="text"
                      placeholder="Enter card title"
                      name="title"
                      value={editCard.title}
                      onChange={(e) => {
                        const copyCard = {
                          ...cards.find((item) => item.id === editPressed),
                        };
                        copyCard.title = e.target.value;
                        setEditCard(copyCard);
                      }}
                      className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-700 font-medium">
                      Flashcards
                    </p>
                    <div className="border border-gray-300 rounded-lg flex flex-col max-h-[200px] overflow-y-scroll gap-4">
                      {topics[
                        cards
                          .find((item) => item.id === editPressed)
                          .tags[0].toLowerCase()
                      ].map((item, index) => {
                        return (
                          <div key={index} className="grid grid-cols-2 gap-x-2">
                            <div className="flex flex-col gap-2 p-4 pb-6 pr-0">
                              <h3 className="font-medium text-gray-800 text-sm">
                                Question {index + 1}
                              </h3>
                              <div>
                                <textarea
                                  type="text"
                                  placeholder="Enter card title"
                                  name="title"
                                  value={
                                    topics[
                                      cards
                                        .find((item) => item.id === editPressed)
                                        .tags[0].toLowerCase()
                                    ][index].question
                                  }
                                  onChange={(e) => {
                                    const copyCopy = { ...topics };
                                    const setTopic =
                                      copyCopy[
                                        cards
                                          .find(
                                            (item) => item.id === editPressed
                                          )
                                          .tags[0].toLowerCase()
                                      ][index];

                                    setTopic.question = e.target.value;
                                    copyCopy[index] = setTopic;
                                    setTopics(copyCopy);
                                  }}
                                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 p-4 pb-6 pl-0">
                              <h3 className="font-medium text-gray-800 text-sm">
                                Answer
                              </h3>
                              <div>
                                <textarea
                                  type="text"
                                  placeholder="Enter card title"
                                  name="title"
                                  value={
                                    topics[
                                      cards
                                        .find((item) => item.id === editPressed)
                                        .tags[0].toLowerCase()
                                    ][index].answer
                                  }
                                  onChange={(e) => {
                                    const copyCopy = { ...topics };
                                    const setTopic =
                                      copyCopy[
                                        cards
                                          .find(
                                            (item) => item.id === editPressed
                                          )
                                          .tags[0].toLowerCase()
                                      ][index];

                                    setTopic.answer = e.target.value;
                                    copyCopy[index] = setTopic;
                                    setTopics(copyCopy);
                                  }}
                                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                              </div>
                            </div>
                            <hr className="h-[2px] col-span-2 bg-gray-200 w-full" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pb-4 ml-auto">
                    <div className="space-x-2">
                      <buttton
                        onClick={() => {
                          setTopics(questions);
                          setEditPressed("");
                        }}
                        className="text-sm font-medium border border-gray-400 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        Cancel
                      </buttton>
                      <button
                        onClick={() => {
                          const newCards = [
                            ...cards.map((item, index) => {
                              if (item.id === editCard.id) {
                                return editCard;
                              }
                              return item;
                            }),
                          ];
                          setCards(newCards);
                          setEditPressed("");
                        }}
                        className="text-sm font-medium text-gray-50 bg-violet-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-violet-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Dialog open={studyPressed ? true : false} className="p-0">
            <DialogContent className="p-0">
              <DialogHeader className="flex justify-between p-4 md:p-6">
                <DialogTitle className="text-xl font-medium">
                  Studying: {studyPressed}
                </DialogTitle>
                <p className="text-xs font-medium text-gray-400">
                  Card 1 of 12
                </p>
              </DialogHeader>
              <hr className="h-[2px] bg-gray-200 w-full" />
              <div className="py-4 px-8">
                {studyPressed && (
                  <div className="w-full flex flex-col gap-4 items-center justify-center bg-gray-50 rounded-lg border border-gray-200 h-[250px] p-4">
                    <h3 className="font-semibold text-sm lg:text-lg text-gray-800 text-center">
                      {topics[studyPressed.toLowerCase()].at(index)["question"]}
                    </h3>
                    {showAnswer ? (
                      <div className="flex flex-col justify-center items-center gap-4">
                        <button
                          onClick={() => setShowAnswer(false)}
                          className="text-green-700 border border-green-400 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          Hide Answer
                        </button>
                        <h3 className="font-semibold text-sm lg:text-base text-green-700 text-center">
                          {
                            topics[studyPressed.toLowerCase()].at(index)[
                              "answer"
                            ]
                          }
                        </h3>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => setShowAnswer(true)}
                          className="text-violet-700 border border-violet-400 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          Show Answer
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-between px-4 py-2 md:px-8 md:py-4">
                <div
                  className="flex items-center"
                  onClick={() => {
                    setIndex((prev) => {
                      if (
                        Math.abs(prev - 1) <
                        topics[studyPressed.toLowerCase()].length
                      ) {
                        return prev - 1;
                      } else {
                        return 0;
                      }
                    });
                  }}
                >
                  <ChevronLeft size={20} className="text-gray-500" />
                  <p className="text-sm text-gray-600 cursor-pointer">
                    Previous
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-red-600 text-sm border border-red-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100">
                    Incorrect
                  </button>
                  <button className="text-green-600 border text-sm border-green-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100">
                    Correct
                  </button>
                </div>
                <div
                  className="flex items-center"
                  onClick={() => {
                    setIndex((prev) => {
                      if (
                        Math.abs(prev + 1) <
                        topics[studyPressed.toLowerCase()].length
                      ) {
                        return prev + 1;
                      } else {
                        return 0;
                      }
                    });
                  }}
                >
                  <p className="text-sm text-gray-600 cursor-pointer">Next</p>
                  <ChevronRight size={20} className="text-gray-500" />
                </div>
              </div>
              <hr className="h-[2px] bg-gray-200 w-full" />
              <div className="px-4 md:px-8 pt-2 pb-4 md:pb-6 flex flex-col items-end">
                <button
                  onClick={() => setStudyPressed("")}
                  className="text-gray-800 border text-sm border-gray-400 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Exit Study Session
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </SidebarProvider>
  );
}
