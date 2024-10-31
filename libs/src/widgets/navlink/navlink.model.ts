import { RouteRelationshipType } from "../../services/navigation/navigation.model";
import { ContentConfig } from "../content/content.model";

export interface NavlinkConfig {
  relationship: RouteRelationshipType
  route: string
  content?: ContentConfig
}