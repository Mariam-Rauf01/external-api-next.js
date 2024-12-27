import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const PostCard = ({ body, title }: { body: string, title: string}) => {
  return <Card>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
        <CardDescription>
            {body}
        </CardDescription>
    </CardContent>
  </Card>
};

export default PostCard;