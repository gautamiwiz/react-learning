function Card({children, title, color = 'blue'}) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
    red: 'border-red-500 bg-red-50',
  };

  return (
    <div
      className={`border-l-4 rounded-lg p-6 shadow-md ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({children, layout = 'vertical'}) {
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex flex-row flex-wrap gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Children props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        debitis placeat eaque ducimus provident distinctio voluptatum nihil
        laboriosam, perspiciatis dignissimos quisquam! Sequi totam rerum culpa
        voluptas voluptate praesentium. Voluptate, suscipit. Id, repudiandae! Ex
        saepe optio repudiandae dolores, numquam aperiam deserunt amet
        voluptatum sint in minus sunt rerum ipsa vitae necessitatibus assumenda
        quis quidem, cum esse corrupti. Voluptates molestias unde veniam.
      </p>
      <div className="space-y-6">
        <div>
          <h3>Card component with children</h3>
          <Container layout="grid">
            <Card title="User profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> Gautam Sharma
              </p>
              <p className="mb-2">
                <strong>Email:</strong> gautam@iwiz.in
              </p>
              <p className="mb-2">
                <strong>Profile:</strong> Developer
              </p>
            </Card>
            <Card title="User profile 2" color="green">
              <p className="mb-2">
                <strong>Name:</strong> Gautam Sharma
              </p>
              <p className="mb-2">
                <strong>Email:</strong> gautam@iwiz.in
              </p>
              <p className="mb-2">
                <strong>Profile:</strong> Developer
              </p>
            </Card>
            <Card title="User profile 2" color="green">
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition cursor-pointer">
                  Hello
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition cursor-pointer">
                  Submit
                </button>
              </div>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;
