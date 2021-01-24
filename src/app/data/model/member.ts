import { ImageFormats } from "./image-formats";
import { MemberDetails } from "./member-details";

export interface Member {
    imageUrl: ImageFormats;
    block: MemberDetails;
}