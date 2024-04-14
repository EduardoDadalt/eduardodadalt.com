export type Repository = {
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  description: string;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  hooks_url: string;
  html_url: string;
  id: number;
  node_id: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  name: string;
  notifications_url: string;
  owner: string;
  private: boolean;
  pulls_url: string;
  releases_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  url: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  role_name: string;
  temp_clone_token: string;
  delete_branch_on_merge: boolean;
  subscribers_count: number;
  network_count: number;
  code_of_conduct: {
    key: string;
    name: string;
    url: string;
    body: string;
    html_url: string | null;
  };
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  forks: number;
  open_issues: number;
  watchers: number;
  allow_forking: boolean;
  web_commit_signoff_required: boolean;
  security_and_analysis: {
    advanced_security: {
      status: "enabled" | "disabled";
    };
    dependabot_security_updates: {
      status: "enabled" | "disabled";
    };
    secret_scanning: {
      status: "enabled" | "disabled";
    };
    secret_scanning_push_protection: {
      status: "enabled" | "disabled";
    };
  } | null;
};
