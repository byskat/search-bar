import { SearchBar } from "./components/SearchBar";
import { Select } from "./components/Select";

const roleFilters = [
  { value: "admin", label: "Administrator" },
  { value: "manager", label: "Manager" },
  { value: "engineer", label: "Engineer" },
  { value: "guest", label: "Guest" },
];

const statusFilters = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
  { value: "banned", label: "Banned" },
];

const App = () => {
  return (
    <div className="bg-columbia_blue flex h-screen w-full items-center justify-center">
      <div className="min-w-[400px]">
        <SearchBar placeholder="Search...">
          <div className="flex gap-4">
            <Select label="Role" items={roleFilters} />
            <Select label="Status" items={statusFilters} />
          </div>
        </SearchBar>
      </div>
    </div>
  );
};

export default App;
