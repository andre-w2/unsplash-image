export interface IPhoto {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: any;
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
    meta: Meta;
    public_domain: boolean;
    tags: Tag[];
    tags_preview: Tagspreview[];
    views: number;
    downloads: number;
    topics: any[];
    related_collections: Relatedcollections;
}

interface Relatedcollections {
    total: number;
    type: string;
    results: Result[];
}

interface Result {
    id: string;
    title: string;
    description: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    featured: boolean;
    total_photos: number;
    private: boolean;
    share_key: string;
    tags: Tag2[];
    links: Links3;
    user: User5;
    cover_photo: Coverphoto4;
    preview_photos: Previewphoto[];
}

interface Previewphoto {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    blur_hash?: string | string;
    urls: Urls;
}

interface Coverphoto4 {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs: any[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: Topicsubmissions;
    user: User6;
}

interface User6 {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social5;
}

interface Social5 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username?: string;
    paypal_email?: any;
}

interface User5 {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    twitter_username?: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social3;
}

interface Links3 {
    self: string;
    html: string;
    photos: string;
    related: string;
}

interface Tag2 {
    type: string;
    title: string;
    source?: Source3;
}

interface Source3 {
    ancestry: Ancestry2;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: Coverphoto3;
}

interface Coverphoto3 {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: string | string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string | string;
    alt_description: string;
    breadcrumbs: any[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: Topicsubmissions4;
    premium?: boolean;
    plus?: boolean;
    user: User4;
}

interface User4 {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: (null | string)[];
    portfolio_url: string;
    bio?: (null | string)[];
    location?: string | string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string | string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social4;
}

interface Social4 {
    instagram_username?: string | string;
    portfolio_url: string;
    twitter_username?: (null | string)[];
    paypal_email?: any;
}

interface Topicsubmissions4 {
    'textures-patterns'?: Wallpapers;
    nature?: Wallpapers;
    wallpapers?: Wallpapers;
    'architecture-interior'?: Wallpapers;
    'color-of-water'?: Wallpapers;
}

interface Ancestry2 {
    type: Type;
    category?: Type;
    subcategory?: Type;
}

interface Tagspreview {
    type: string;
    title: string;
    source?: Source2;
}

interface Source2 {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: Coverphoto2;
}

interface Coverphoto2 {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: Topicsubmissions3;
    premium: boolean;
    plus: boolean;
    user: User3;
}

interface User3 {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: string;
    portfolio_url: string;
    bio?: string;
    location: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social3;
}

interface Social3 {
    instagram_username?: string;
    portfolio_url: string;
    twitter_username?: string;
    paypal_email?: any;
}

interface Topicsubmissions3 {
    wallpapers?: Wallpapers;
    'textures-patterns'?: Wallpapers;
}

interface Tag {
    type: string;
    title: string;
    source?: Source;
}

interface Source {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: Coverphoto;
}

interface Coverphoto {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: Topicsubmissions2;
    premium?: boolean;
    plus?: boolean;
    user: User2;
}

interface User2 {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: string;
    portfolio_url?: string;
    bio?: string;
    location: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
}

interface Social2 {
    instagram_username?: string;
    portfolio_url?: string;
    twitter_username?: string;
    paypal_email?: any;
}

interface Topicsubmissions2 {
    wallpapers?: Wallpapers;
    'textures-patterns'?: Wallpapers;
    experimental?: Wallpapers;
}

interface Wallpapers {
    status: string;
    approved_on: string;
}

interface Breadcrumb {
    slug: string;
    title: string;
    index: number;
    type: string;
}

interface Ancestry {
    type: Type;
    category: Type;
    subcategory: Type;
}

interface Type {
    slug: string;
    pretty_slug: string;
}

interface Meta {
    index: boolean;
}

interface Location {
    name?: any;
    city?: any;
    country?: any;
    position: Position;
}

interface Position {
    latitude?: any;
    longitude?: any;
}

interface Exif {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: any;
    portfolio_url?: any;
    bio?: any;
    location: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

interface Social {
    instagram_username: string;
    portfolio_url?: any;
    twitter_username?: any;
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