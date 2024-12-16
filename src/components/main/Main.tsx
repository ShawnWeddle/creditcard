import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreditCard from "../card/CreditCard";

const Main: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter your Credit Card information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <CreditCard />
        </div>
      </CardContent>
      <CardFooter>Thanks</CardFooter>
    </Card>
  );
};

export default Main;
