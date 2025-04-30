import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function TopicCard({
  editPressed,
  setEditPressed,
  setStudyPressed,
  info,
}) {
  return (
    <Card className="shadow-sm rounded-lg p-0">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-col gap-2 px-5 py-4">
          <h2 className="text-gray-800 font-semibold text-lg">{info.title}</h2>
          <div className="flex gap-2 items-center">
            {info.tags.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="text-gray-800 bg-gray-100 p-2 py-1 rounded-lg text-xs"
                >
                  {item}
                </h4>
              );
            })}
            <p className="text-xs text-gray-500">{info.cards} Cards</p>
          </div>
        </div>
        <hr className="w-full h-[2px] bg-gray-50" />
        <div className="flex justify-between px-5 py-4">
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="text-xs text-gray-500">Completion Rate</h3>
            <div className="flex justify-start items-center">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${info.completion}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium ml-2">
                {info.completion}%
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="text-xs text-gray-500">Accuracy</h3>
            <div className="flex justify-start items-center">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${info.accuracy}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium ml-2">{info.accuracy}%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 pb-4">
        <div className="flex items-center justify-start gap-1">
          <Clock size={18} className="text-gray-500" />
          <p className="text-sm text-gray-500">{info.last_edit}</p>
        </div>
        <div className="space-x-2">
          <buttton
            onClick={() => {
              setEditPressed(info.id);
            }}
            className="text-sm font-medium border border-gray-400 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            Edit
          </buttton>
          <button
            onClick={() => {
              setStudyPressed(info.tags[0].toLowerCase());
            }}
            className="text-sm font-medium text-gray-50 bg-violet-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-violet-600"
          >
            Study
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
