export interface RootObject {
    value: any;
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description: string;
    breadcrumbs: any[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: Topicsubmissions;
    user: User;
    exif: Exif;
    location: Location;
    views: number;
    downloads: number;
}

interface Location {
    name?: string;
    city?: string;
    country?: string;
    position: Position;
}

interface Position {
    latitude: number;
    longitude: number;
}

interface Exif {
    make?: string;
    model?: string;
    name?: string;
    exposure_time?: string;
    aperture?: string;
    focal_length?: string;
    iso?: number;
}

interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: string;
    portfolio_url?: string;
    bio?: string;
    location?: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

interface Social {
    instagram_username?: string;
    portfolio_url?: string;
    twitter_username?: string;
    paypal_email?: any;
}

interface Profileimage {
    small: string;
    medium: string;
    large: string;
}

interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

interface Topicsubmissions {
    people?: People;
    nature?: Nature;
    wallpapers?: Nature;
    'arts-culture'?: People;
}

interface Nature {
    status: string;
}

interface People {
    status: string;
    approved_on: string;
}

interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}